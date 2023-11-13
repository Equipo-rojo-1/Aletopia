import { Test } from '@nestjs/testing';

import { AppService } from '../../app.service';
import { ticketStub } from '../stubs/index';
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

  describe('Generate jwt', () => {
    it('should return a jwt', async () => {
      expect((await service.generateJwt(ticketStub)).split('.')).toHaveLength(
        3
      );
    });
  });

  describe('Generate qr code', () => {
    it('Should return a qr code in svg format', async () => {
      const jwt =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      expect(await service.createQrCode(jwt)).toContain('<svg');
    });
  });
});
