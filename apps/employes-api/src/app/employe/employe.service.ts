import { HttpException, Injectable } from '@nestjs/common';
import { UpdatePersonDto } from './dto/update.person.dto';
import { CreatePersonDto } from './dto/create.person.dto';
import { Person } from './entities/employe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
    constructor(@InjectRepository(Person) private personRepository: Repository<Person>) { }

    async createPerson(person: CreatePersonDto) {
        const employeExists = await this.personRepository.findOne({
            where: {
                cedula: person.cedula
            }
        })
        
        if (employeExists) throw new HttpException('the employee already exists', 403);

        const newPerson = this.personRepository.create(person);
        return this.personRepository.save(newPerson);
    }

    getPerson() {
        return this.personRepository.find();
    }

    async getPersonByCedula(cedula: string) {
        const employeExists = await this.personRepository.findOne({
            where: {
                cedula
            }
        });

        if (!employeExists) throw new HttpException('the employee already exists', 404);

        return employeExists;
    }

    async deletePerson(cedula: string) {
        const employeExists = await this.personRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeExists) throw new HttpException('the employee does not exist', 404);

        return this.personRepository.softDelete({ cedula });
    }

    async updatePerson(cedula: string, person: UpdatePersonDto) {
        const employeExists = await this.personRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeExists) throw new HttpException('the employee does not exist', 404);

        return this.personRepository.update({ cedula }, person);
    }
}