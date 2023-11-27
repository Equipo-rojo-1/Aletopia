import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ticketGeneratorController } from './ticketGenerator.controller';
import { ticketGeneratorService } from './ticketGenerator.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule,
  ],
  controllers: [ticketGeneratorController],
  providers: [ticketGeneratorService],
})
export class ticketGeneratorModule {}
