import { Controller, Post, Body, Get, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { UpdatePersonaDto } from './dto/update.persona.dto';
import { CreatePersonaDto } from './dto/create.persona.dto';
import { EmpleadosService } from './empleados.service';
import { personal } from './empleados.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('empleados')
export class EmpleadosController {

    constructor(private readonly personaService: EmpleadosService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    GetPersona(): Promise<personal[]> {
        return this.personaService.GetPersona()
    }
    @UseGuards(JwtAuthGuard)
    @Get(':cedula')
    GetPersonaBy(@Param('cedula') cedula: string): Promise<personal> {
        return this.personaService.GetPersonaBy(cedula)
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    CreatePersona(@Body() new_persona: CreatePersonaDto): Promise<personal> {
        return this.personaService.CreatePersona(new_persona)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':cedula')
    DeletePersona(@Param('cedula') cedula: string) {
        return this.personaService.DeletePersona(cedula)
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':cedula')
    UpdatePersona(@Param('cedula') cedula: string, @Body() persona: UpdatePersonaDto) {
        return this.personaService.UpdatePersona(cedula, persona)
    }

}
