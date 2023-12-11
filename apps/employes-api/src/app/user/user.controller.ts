import { Body, Controller, Get, Param, Post, Delete, Patch, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUser } from './dto/update.user.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post('create')
    register(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.createUser(user);
    }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }
 
    @Get(':cedula')
    getUserByCedula(@Param('cedula') cedula: string): Promise<User> {
        return this.userService.getUserByCedula(cedula);
    }

    @Delete(':cedula')
    deleteUser(@Param('cedula') cedula: string) {
        return this.userService.deleteUser(cedula);
    }

    @Patch(':cedula')
    updateUser(@Param('cedula') cedula: string, @Body() user: UpdateUser) {
        return this.userService.updateUser(cedula, user);
    }
}