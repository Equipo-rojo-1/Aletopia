import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { Transform } from "class-transformer";

export class UpdatePersonDto {

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(7)
  @IsOptional()
  cedula?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  @IsOptional()
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

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(5)
  @IsOptional()
  jobtitle?: string;
}
