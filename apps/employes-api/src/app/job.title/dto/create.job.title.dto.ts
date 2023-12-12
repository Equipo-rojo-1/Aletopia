import { Transform } from "class-transformer";
import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateJobTitleDto {
    
    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(5)
    name: string;

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