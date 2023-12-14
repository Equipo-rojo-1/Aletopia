import { Controller, Post, Body, Get, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { UpdatePersonDto } from './dto/update.person.dto';
import { CreatePersonDto } from './dto/create.person.dto';
import { EmployeService } from './employe.service';
import { Person } from './entities/employe.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('employe')
@UseGuards(JwtAuthGuard)
export class EmployeController {

    constructor(private readonly personService: EmployeService) { }

    @Get()
    getPerson(): Promise<Person[]> {
        return this.personService.getPerson();
    }

    @Get(':cedula')
    getPersonByCedula(@Param('cedula') cedula: string): Promise<Person> {
        return this.personService.getPersonByCedula(cedula);
    }

    @Post('create')
    createPerson(@Body() person: CreatePersonDto): Promise<Person> {
        return this.personService.createPerson(person);
    } 

    @Delete(':cedula')
    deletePerson(@Param('cedula') cedula: string) {
        return this.personService.deletePerson(cedula);
    }

    @Patch(':cedula')
    updatePerson(@Param('cedula') cedula: string, @Body() person: UpdatePersonDto) {
        return this.personService.updatePerson(cedula, person);
    }
}
