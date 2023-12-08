import { Transform } from "class-transformer";
import {
  IsDateString,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class UpdatePersonDto {

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(7)
  @IsOptional()
  cedula?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  nombre?: string;

  @IsEmail()
  @IsOptional()
  correo?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  @IsOptional()
  apellido?: string;

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

  @IsDateString()
  @IsOptional()
  fechaNacimiento?: Date;
}
