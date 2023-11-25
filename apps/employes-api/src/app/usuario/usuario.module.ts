import { UsuarioController } from './usuario.controller';
import { personal } from '../empleados/empleados.entity';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './usuario.entity';
import { Module } from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt'
import { jwtConstants } from './jwt_constants';
@Module({
  imports: [TypeOrmModule.forFeature([personal, User]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s'}
  }),
],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [TypeOrmModule]
})

export class UsuarioModule { } 