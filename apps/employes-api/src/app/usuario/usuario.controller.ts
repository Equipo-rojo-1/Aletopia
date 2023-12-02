import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsuarioService } from './usuario.service';
import { UpdateUser } from './dto/update.user';
import { LoginUserDto } from './dto/login.dto';
import { User } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly UserService: UsuarioService) { }

    @Post('create')
    AddUser(@Body() newUser: CreateUserDto): Promise<User> {
        return this.UserService.createUsuario(newUser)
    }

    @Post('login')
    LoginUser(@Body() usuario: LoginUserDto) {
        return this.UserService.login(usuario)
    }

    @Get()
    GetUsers(): Promise<User[]> {
        return this.UserService.getUsers()
    } 

    @Get(':id_cedula')
    GetUserBy(@Param('id_cedula') idCedula: string): Promise<User> {
        return this.UserService.getUserBy(idCedula)
    }

    @Delete(':id_cedula')
    DeleteUser(@Param('id_cedula') id_cedula: string) {
        return this.UserService.deleteUser(id_cedula)
    }

    @Patch(':id_cedula')
    UpdateUser(@Param('id_cedula') id_cedula: string, @Body() usuario: UpdateUser) {
        return this.UserService.updateUser(id_cedula, usuario)
    }
}