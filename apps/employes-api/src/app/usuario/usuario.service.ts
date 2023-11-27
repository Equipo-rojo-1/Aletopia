import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { personal } from '../empleados/empleados.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './usuario.entity';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    constructor(@InjectRepository(User) private UserRepository: Repository<User>,
        @InjectRepository(personal) private personalRepository: Repository<personal>,
        private jwtAuthService: JwtService) { }

    async CreateUsuario(usuario: CreateUserDto) {
        const personaExists = this.personalRepository.findOneBy({ cedula: usuario.id_cedula })
        if (!personaExists) {
            throw new BadRequestException('The person not exists')
        }
        else {
            const newUser = this.UserRepository.create()
            newUser.username = usuario.username
            newUser.password = await hash(usuario.password, 10)
            newUser.id_cedula = usuario.id_cedula
            return this.UserRepository.save(newUser);
        }
    }

    async Login(user: LoginUserDto) {
        const { username, password } = user
        const userExists = await this.UserRepository.findOneBy({ username })
        if (!userExists) {
            throw new HttpException('Incorrect', 403)
        }
        const verifyPassword = await compare(password, userExists.password)
        if (!verifyPassword) {
            throw new HttpException('Incorrect', 403)
        }
        const payload = { id: userExists.id, username: userExists.username }
        const token = this.jwtAuthService.sign(payload)
        const data = {
            Usuario: userExists,
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
