import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreatePersonaDto {

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(7)
    cedula: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsEmail()
    correo: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    apellido: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(10)
    telefono: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    direccion: string;

    edad?: number;
    fechaNacimiento: Date;
    fechaIngreso?: Date;
}