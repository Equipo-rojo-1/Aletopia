import { HttpException, Injectable } from '@nestjs/common';
import { UpdatePersonDto } from './dto/update.person.dto';
import { CreatePersonDto } from './dto/create.person.dto';
import { Person } from './entities/employe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeService {
    constructor(@InjectRepository(Person) private readonly personRepository: Repository<Person>) { }

    async createPerson(person: CreatePersonDto) {
        const employeExists = await this.personRepository.findOne({
            where: {
                cedula: person.cedula
            }
        })

        if (employeExists) throw new HttpException('the employee already exists', 403);

        const createPerson = this.personRepository.create(person);
        return this.personRepository.save(createPerson);
    }

    getPerson() {
        return this.personRepository.find();
    }

    async getPersonByCedula(cedula: string) {
        const employeByCedula = await this.personRepository.findOne({
            where: {
                cedula
            }
        });

        if (!employeByCedula) throw new HttpException('the employee does not exists', 404);

        return employeByCedula;
    }

    async getPersonByJobTitle(jobtitle: string) {
        const employeByJobTitle = await this.personRepository.find({ 
            where: {
                jobtitle 
            }
        });
        if (!employeByJobTitle) throw new HttpException('there is no employee with that position', 404);

        return employeByJobTitle;
    }

    async deletePerson(cedula: string) {
        const employeByCedula = await this.personRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeByCedula) throw new HttpException('the employee does not exist', 404);

        return this.personRepository.softDelete({ cedula });
    }

    async updatePerson(cedula: string, person: UpdatePersonDto) {
        const employeByCedula = await this.personRepository.findOne({
            where: {
                cedula
            }
        })

        if (!employeByCedula) throw new HttpException('the employee does not exist', 404);

        return this.personRepository.update({ cedula }, person);
    }
}