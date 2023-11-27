import { EmpleadosModule } from './empleados/empleados.module';
import { UsuarioModule } from './usuario/usuario.module';
import { personal } from './empleados/empleados.entity';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './usuario/usuario.entity';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'empleados',
      entities: [personal, User],
      synchronize: true
    }),
    EmpleadosModule,
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
