import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateJobTitleDto } from './dto/create.job.title.dto';
import { UpdateJobTitleDto } from './dto/update.job.title.dto';
import { JobTitle } from './entities/job.title.entity';
import { JobTitleService } from './job.title.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('jobtitle')
@UseGuards(JwtAuthGuard)
export class JobTitleController {

    constructor(private readonly jobTitleService: JobTitleService) { }

    @Post('create')
    createJobTitle(@Body() newJobTitle: CreateJobTitleDto): Promise<JobTitle> {
        return this.jobTitleService.createJobTitle(newJobTitle);
    }

    @Get()
    getJobTitle(): Promise<JobTitle[]> {
        return this.jobTitleService.getJobTitle();
    }

    @Get(':name')
    getJobTitleByName(@Param('name') name: string): Promise<JobTitle> {
        return this.jobTitleService.getJobTitleByName(name);
    }

    @Delete(':name')
    deleteJobTitle(@Param('name') name: string) {
        return this.jobTitleService.deleteJobTitle(name);
    }

    @Patch(':name')
    updateJobTitle(@Param('name') name: string, @Body() Jobtitle: UpdateJobTitleDto) {
        return this.jobTitleService.updateJobTitle(name, Jobtitle);
    }
}
