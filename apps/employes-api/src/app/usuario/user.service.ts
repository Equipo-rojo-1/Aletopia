import { Person } from '../empleados/entities/employe.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUser } from './dto/update.user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
 
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(Person) private readonly personalRepository: Repository<Person>,
    ) { }
 
    async createUser(usuario: CreateUserDto) {
        const personExists = this.personalRepository.findOneBy({
            cedula: usuario.cedula
        });
 
        if (!personExists) throw new HttpException('NotFound', 404);

        const newUser = this.userRepository.create();
        newUser.username = usuario.username;
        newUser.cedula = usuario.cedula;
        newUser.password = await hash(usuario.password, 10);

        return this.userRepository.save(newUser);
    }

    async getUsers() {
        return await this.userRepository.find();
    }

    async getUserBy(id: string) {
        const personExists = await this.userRepository.findOne({
            where: {
                cedula: id
            }
        })

        if (!personExists) throw new HttpException('NotFound', 404);

        return personExists;
    }

    async deleteUser(id: string) {
        const userExists = await this.userRepository.findOne({
            where: {
                cedula: id
            }
        })

        if (!userExists) throw new HttpException('NotFound', 404);

        return await this.userRepository.delete({ cedula: id });
    }

    async updateUser(id: string, usuario: UpdateUser) {
        const personExists = await this.userRepository.findOne({
            where: {
                cedula: id
            }
        })

        if (!personExists) throw new HttpException('NotFound', 404);;

        const updateUser = this.userRepository.create();

        updateUser.username = usuario.username;
        updateUser.password = await hash(usuario.password, 10);
        return await this.userRepository.update({ cedula: id }, updateUser);
    }
}