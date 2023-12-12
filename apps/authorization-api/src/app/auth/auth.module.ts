import { User } from './user/entities/user.entity';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from './jwt.constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '10h' },
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
