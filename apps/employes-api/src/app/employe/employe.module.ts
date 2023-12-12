import { EmployeController } from './employe.controller';
import { EmployeService } from './employe.service';
import { Person } from './entities/employe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [EmployeController],
  providers: [EmployeService],
  exports: [TypeOrmModule]
}) 
export class EmployeModule { }