import { JobTitleController } from './job.title.controller';
import { Person } from '../employe/entities/employe.entity';
import { JobTitle } from './entities/job.title.entity';
import { JobTitleService } from './job.title.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([Person, JobTitle])],
    controllers: [JobTitleController],
    providers: [JobTitleService],
    exports: [TypeOrmModule]
})
export class JobTitleModule {}
