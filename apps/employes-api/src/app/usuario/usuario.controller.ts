import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UsuarioService } from './usuario.service';
import { User } from './usuario.entity';
import { LoginUserDto } from './dto/login.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private UserService: UsuarioService) { }

    @Post()
    AddUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.UserService.CreateUsuario(newUser)
    }

    @Post('login')
    login_user(@Body() usuario: LoginUserDto){
        return this.UserService.login(usuario)
    }

    @Get()
    GetUsers(): Promise<User[]> {
        return this.UserService.GetUsers()
    }

    @Get(':cedula')
    GetUserBy(@Param('idCedula') idCedula: string): Promise<User> {
        return this.UserService.GetUserBy(idCedula)
    }
}
