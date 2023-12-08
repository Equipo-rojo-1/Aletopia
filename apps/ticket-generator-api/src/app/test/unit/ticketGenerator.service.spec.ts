import { Test } from '@nestjs/testing';

import { ticketGeneratorService } from '../../ticketGenerator.service';
import { ticketStub } from '../stubs';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

describe('AppService', () => {
  let service: ticketGeneratorService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ticketGeneratorService],
      imports: [ConfigModule, JwtModule],
    }).compile();

    service = app.get<ticketGeneratorService>(ticketGeneratorService);
  });

  describe('Generate ticket', () => {
    it('Should return a qr code in svg format', async () => {
      expect(await service.generateTicket(ticketStub)).toContain('<svg');
    });
  });
});
