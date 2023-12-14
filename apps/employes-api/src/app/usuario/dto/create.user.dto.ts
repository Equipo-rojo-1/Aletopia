import { IsEmail, IsString, MinLength } from "class-validator";
import { Transform } from 'class-transformer';

export class CreateUserDto {

    @IsEmail()
    username: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(6)
    password: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(7)
    idCedula: string;
}