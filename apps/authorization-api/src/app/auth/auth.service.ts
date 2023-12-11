import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './user/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private readonly UserRepository: Repository<User>,
        private jwtAuthService: JwtService) { }

    async login(user: LoginUserDto) {
        const { username, password } = user;
        const userExists = await this.UserRepository.findOneBy({ username });

        if (!userExists) throw new UnauthorizedException();

        const verifyPassword = await compare(password, userExists.password);

        if (!verifyPassword) throw new UnauthorizedException();

        const payload = { id: userExists.id, username: userExists.username }
        const token = this.jwtAuthService.sign(payload);
        const data = {
            Usuario: userExists,
            token
        }
        return data;
    }
}
