import { UpdatePersonaDto } from './dto/update.persona.dto';
import { CreatePersonaDto } from './dto/create.persona.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { personal } from './empleados.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
    constructor(@InjectRepository(personal) private personalRepository: Repository<personal>) { }

    async CreatePersona(persona: CreatePersonaDto) {
        const employeExists = await this.personalRepository.findOne({
            where: {
                cedula: persona.cedula
            }
        })

        if (employeExists) {
            throw new BadRequestException('Not exists')
        }

        else {
            const newPersona = this.personalRepository.create(persona)
            return this.personalRepository.save(newPersona)
        }
    }

    GetPersona() {
        return this.personalRepository.find()
    }

    async GetPersonaBy(cedula: string) {
        const employeExists = await this.personalRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeExists) {
            throw new BadRequestException('Not exists')
        }

        else {
            return employeExists
        }
    }

    async DeletePersona(cedula: string) {
        const employeExists = await this.personalRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeExists) {
            throw new BadRequestException('Not exists')

        }
        else {
            return this.personalRepository.delete({ cedula })
        }
    }

    async UpdatePersona(cedula: string, persona: UpdatePersonaDto) {
        const employeExists = await this.personalRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeExists) {
            throw new BadRequestException('Not exists')
        }
        else {
            return this.personalRepository.update({ cedula }, persona)
        }
    }
}