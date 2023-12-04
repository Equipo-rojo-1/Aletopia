import { Transform } from "class-transformer";
import { IsDateString, IsEmail, IsInt, IsOptional, IsString, MinLength } from "class-validator";

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
    @IsOptional()
    telefono?: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    @IsOptional()
    direccion?: string;

    @IsInt()
    @IsOptional()
    edad?: number;

    @IsDateString()
    fechaNacimiento: Date;
}