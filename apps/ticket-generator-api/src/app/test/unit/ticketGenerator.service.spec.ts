import { Test } from '@nestjs/testing';

import { AppService } from '../../ticketGenerator.service';
import { ticketStub } from '../stubs';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [ConfigModule, JwtModule],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('Generate ticket', () => {
    it('Should return a qr code in svg format', async () => {
      expect(await service.generateTicket(ticketStub)).toContain('<svg');
    });
  });
});
