import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './usuario/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService) { }

    @Post('login')
    login(@Body() user: LoginUserDto) {
        return this.AuthService.login(user)
    }
}
