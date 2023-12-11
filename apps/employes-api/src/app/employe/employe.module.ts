import { EmpleadosController } from './employe.controller';
import { EmpleadosService } from './employe.service';
import { Person } from './entities/employe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
  exports: [TypeOrmModule]
})
export class EmpleadosModule { }
