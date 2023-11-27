import { UpdatePersonaDto } from './dto/update.persona.dto';
import { CreatePersonaDto } from './dto/create.persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { personal } from './empleados.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
    constructor(@InjectRepository(personal) private personalRepository: Repository<personal>) { }

    CreatePersona(persona: CreatePersonaDto) {
        const newpersona = this.personalRepository.create(persona)
        return this.personalRepository.save(newpersona)
    }

    GetPersona() {
        return this.personalRepository.find()
    }

    GetPersonaBy(cedula: string) {
        return this.personalRepository.findOne({
            where: {
                cedula
            }
        })
    }

    DeletePersona(cedula: string) {
        return this.personalRepository.delete({ cedula })
    }

    UpdatePersona(cedula: string, persona: UpdatePersonaDto) {
        return this.personalRepository.update({ cedula }, persona)
    }
}
