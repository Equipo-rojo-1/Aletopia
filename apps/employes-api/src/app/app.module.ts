import { EmpleadosModule } from './empleados/empleados.module';
import { UsuarioModule } from './usuario/usuario.module';
import { personal } from './empleados/empleados.entity';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './usuario/usuario.entity';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import dotenv from 'dotenv';

dotenv.config()
const db_port = process.env.DATA_BASE_PORT;
const db_name = process.env.DATA_BASE_NAME;
const db_host = process.env.DATA_BASE_HOST;
const db_user = process.env.DATA_BASE_USERNAME;
const db_pass = process.env.DATA_BASE_PASSWORD;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db_host,
      port: parseInt(db_port),
      username: db_user,
      password: db_pass,
      database: db_name,
      entities: [personal, User],
      synchronize: true
    }),
    EmpleadosModule,
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
