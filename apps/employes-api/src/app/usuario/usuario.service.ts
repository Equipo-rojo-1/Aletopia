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

    async createUser(usuario: CreateUserDto) {
        const persona_exists = this.personalRepository.findOneBy({ cedula: usuario.idCedula });
        if (!persona_exists) {
            throw new BadRequestException("Username does not exist");
        }
        else {
            const new_user = this.UserRepository.create();
            new_user.username = usuario.username;
            new_user.password = await hash(usuario.password, 10);
            new_user.idCedula = usuario.idCedula;
            return this.UserRepository.save(new_user);
        }
    }

    async login(user: LoginUserDto) {
        const { username, password } = user;
        const user_exists = await this.UserRepository.findOneBy({ username });
        if (!user_exists) {
            throw new BadRequestException("invalid credentials");
        }
        const verify_password = await compare(password, user_exists.password);
        if (!verify_password) {
            throw new BadRequestException("invalid credentials");
        }
        const payload = { id: user_exists.id, username: user_exists.username }
        const token = this.jwtAuthService.sign(payload);
        const data = {
            Usuario: user_exists,
            token
        }
        return data;
    }

    async getUsers() {
        return await this.UserRepository.find();
    }

    async getUserBy(id: string) {
        const persona_exists = await this.UserRepository.findOne({
            where: {
                idCedula: id
            }
        })
        if (!persona_exists) {
            throw new BadRequestException('invalid id');
        } else {
            return persona_exists;
        }
    }

    async deleteUser(id: string) {
        const user_exists = await this.UserRepository.findOne({
            where: {
                idCedula: id
            }
        })

        if (!user_exists) { 
            throw new BadRequestException('invalid id');

        }
        else {
            return  await this.UserRepository.delete({ idCedula: id });
        }
    }

    async updateUser(id: string, usuario: UpdateUser) {
        const persona_exists = await this.UserRepository.findOne({
            where: {
                idCedula: id
            }
        })

        if (!persona_exists) {
            throw new BadRequestException('invalid id');
        }
        else {
            const update_user = this.UserRepository.create();
            update_user.username = usuario.username;
            update_user.password = await hash(usuario.password, 10);
            return await this.UserRepository.update({ idCedula: id }, update_user);
        }
    }
}