import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { AppModule } from '../../app.module';
import { TicketDto } from '../../dto';
import { ticketStub } from '../stubs';

describe('AppController Integration', () => {
  let moduleRef: TestingModule;
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    appController = moduleRef.get(AppController);
    appService = moduleRef.get(AppService);
  });

  describe('Generate ticket', () => {
    it('should return a qrCode', async () => {
      const res = await appController.generateQrTicket(ticketStub);
      expect(res.qrCode).toContain('<svg');
    });
  });
});
