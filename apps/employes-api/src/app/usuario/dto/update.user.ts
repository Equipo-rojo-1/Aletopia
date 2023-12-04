import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUser {
  @IsEmail()
  @IsOptional()
  username?: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}
