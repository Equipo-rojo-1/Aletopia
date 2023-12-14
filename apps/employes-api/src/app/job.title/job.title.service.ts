import { UpdateJobTitleDto } from './dto/update.job.title.dto';
import { CreateJobTitleDto } from './dto/create.job.title.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { JobTitle } from './entities/job.title.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobTitleService {

    constructor(@InjectRepository(JobTitle) private readonly jobTitleRepository: Repository<JobTitle>) { }

    async createJobTitle(jobtitle: CreateJobTitleDto) {
        const jobTitleExist = await this.jobTitleRepository.findOne({
            where: {
                name: jobtitle.name
            }
        });

        if (jobTitleExist) throw new HttpException("the job title already exists", 403);

        const createJobTitle = this.jobTitleRepository.create(jobtitle);
        return this.jobTitleRepository.save(createJobTitle);
    }

    async getJobTitle() {
        return this.jobTitleRepository.find();
    }

    async getJobTitleByName(name: string) {
        const jobTitleExist = await this.jobTitleRepository.findOne({
            where: {
                name
            } 
        });

        if (!jobTitleExist) throw new HttpException("the job title does not exists", 404);

        return jobTitleExist;
    }

    async deleteJobTitle(name: string) {
        const jobTitleExist = await this.jobTitleRepository.findOne({
            where: {
                name
            }
        });

        if (!jobTitleExist) throw new HttpException("the job title does not exists", 404);

        return this.jobTitleRepository.delete({ name });
    }

    async updateJobTitle(name: string, jobTitle: UpdateJobTitleDto) {
        const jobTitleExist = await this.jobTitleRepository.findOne({
            where: {
                name
            }
        });

        if (!jobTitleExist) throw new HttpException("the job title does not exists", 404);

        return this.jobTitleRepository.update({ name }, jobTitle);
    }
}