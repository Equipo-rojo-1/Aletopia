import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AppController } from './ticketGenerator.controller';
import { AppService } from './ticketGenerator.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
