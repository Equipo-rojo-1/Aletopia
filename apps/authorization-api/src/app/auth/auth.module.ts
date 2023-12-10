import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { User } from './usuario/entities/usuario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '240s' },
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
