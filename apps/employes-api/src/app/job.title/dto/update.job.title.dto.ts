import { Transform } from "class-transformer";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateJobTitleDto {
    
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(5)
    @IsOptional()
    name?: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(5)
    @IsOptional()
    description?: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(5)
    @IsOptional()
    responsibility?: string;
}