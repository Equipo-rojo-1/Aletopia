import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { UpdatePersonaDto } from './dto/update.persona.dto';
import { CreatePersonaDto } from './dto/create.persona.dto';
import { EmpleadosService } from './empleados.service';
import { personal } from './empleados.entity';

@Controller('empleados')
export class EmpleadosController {

    constructor(private readonly personaService: EmpleadosService) { }

    @Get()
    GetPersona(): Promise<personal[]> {
        return this.personaService.GetPersona()
    }

    @Get(':cedula')
    GetPersonaBy(@Param('cedula') cedula: string): Promise<personal> {
        return this.personaService.GetPersonaBy(cedula)
    }

    @Post('create')
    CreatePersona(@Body() newpersona: CreatePersonaDto): Promise<personal> {
        return this.personaService.CreatePersona(newpersona)
    }

    @Delete(':cedula')
    DeletePersona(@Param('cedula') cedula: string) {
        return this.personaService.DeletePersona(cedula)
    }

    @Patch(':cedula')
    UpdatePersona(@Param('cedula') cedula: string, @Body() persona: UpdatePersonaDto) {
        return this.personaService.UpdatePersona(cedula, persona)
    }

}
