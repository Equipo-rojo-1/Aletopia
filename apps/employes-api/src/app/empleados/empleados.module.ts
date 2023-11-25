import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { personal } from './empleados.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([personal])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
  exports: [TypeOrmModule]
})
export class EmpleadosModule { }
