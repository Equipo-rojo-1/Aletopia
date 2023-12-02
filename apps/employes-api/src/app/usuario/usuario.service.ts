import { BadRequestException, Injectable } from '@nestjs/common';
import { personal } from '../empleados/empleados.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login.dto';
import { UpdateUser } from './dto/update.user';
import { JwtService } from '@nestjs/jwt';
import { User } from './usuario.entity';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(User) private readonly UserRepository: Repository<User>,
        @InjectRepository(personal) private readonly personalRepository: Repository<personal>,
        private jwtAuthService: JwtService) { }

    async createUsuario(usuario: CreateUserDto) {
        const personaExists = this.personalRepository.findOneBy({ cedula: usuario.idCedula })
        if (!personaExists) {
            throw new BadRequestException("Username does not exist")
        }
        else {
            const newUser = this.UserRepository.create()
            newUser.username = usuario.username
            newUser.password = await hash(usuario.password, 10)
            newUser.id_cedula = usuario.idCedula
            return this.UserRepository.save(newUser);
        }
    }

    async login(user: LoginUserDto) {
        const { username, password } = user
        const userExists = await this.UserRepository.findOneBy({ username })
        if (!userExists) {
            throw new BadRequestException("Invalid Post")
        }
        const verifyPassword = await compare(password, userExists.password)
        if (!verifyPassword) {
            throw new BadRequestException("Invalid Post")
        }
        const payload = { id: userExists.id, username: userExists.username }
        const token = this.jwtAuthService.sign(payload)
        const data = {
            Usuario: userExists,
            token
        }
        return data
    }

    getUsers() {
        return this.UserRepository.find()
    }

    async getUserBy(id_cedula: string) {
        const personaExists = await this.UserRepository.findOne({
            where: {
                id_cedula
            }
        })
        if (!personaExists) {
            throw new BadRequestException()
        } else {
            return personaExists
        }
    }

    async deleteUser(id_cedula: string) {
        const userExists = await this.UserRepository.findOne({
            where: {
                id_cedula
            }
        })

        if (!userExists) {
            throw new BadRequestException()

        }
        else {
            return this.UserRepository.delete({ id_cedula })
        }
    }

    async updateUser(id_cedula: string, usuario: UpdateUser) {
        const personaExists = await this.UserRepository.findOne({
            where: {
                id_cedula
            }
        })

        if (!personaExists) {
            throw new BadRequestException()
        }
        else {
            const update_user = this.UserRepository.create()
            update_user.username = usuario.username
            update_user.password = await hash(usuario.password, 10)
            return this.UserRepository.update({ id_cedula }, update_user)
        }
    }
}