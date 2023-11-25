import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { personal } from '../empleados/empleados.entity';
import { CreateUserDto } from './dto/create_user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { transporter } from './sendEmail';
import { User } from './usuario.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login.dto';
import { hash , compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(User) private UserRepository: Repository<User>,
        @InjectRepository(personal) private personalRepository: Repository<personal>,
        private jwtAuthService:JwtService ){ }

     async CreateUsuario(usuario: CreateUserDto) {
        const existe_persona = this.personalRepository.findOneBy({ cedula: usuario.id_cedula })
        if (!existe_persona) {
            throw new BadRequestException('Error la persona no existe')
        }
        else {
           if(existe_persona){
            const newUser = this.UserRepository.create()
            newUser.username = usuario.username
            newUser.password = await hash(usuario.password,10)
            newUser.id_cedula = usuario.id_cedula   
            return this.UserRepository.save(newUser);
           }
        }
    }
    
    async login(user: LoginUserDto){
        const {username, password} = user
        const existe_usuario = await this.UserRepository.findOneBy({username})
        if(!existe_usuario){
             throw  new HttpException('El username no esta registrado', 404)
        }
        const veri_password = await compare(password,existe_usuario.password)
        if(!veri_password){
            throw new HttpException('password incorrect', 403)
        }
        const payload = {id:existe_usuario.id,username: existe_usuario.username}
        const token = await this.jwtAuthService.sign(payload)
        const data = {
            Usuario:existe_usuario,
            token 
        }
        return data
    }

    GetUsers() {
        return this.UserRepository.find()
    }

    GetUserBy(id_cedula: string) {
        return this.UserRepository.findOne({
            where: {
                id_cedula
            }
        })
    }
}
