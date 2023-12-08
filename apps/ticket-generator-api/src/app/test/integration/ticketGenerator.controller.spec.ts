import { Test, TestingModule } from '@nestjs/testing';

import { ticketGeneratorController } from '../../ticketGenerator.controller';
import { ticketGeneratorService } from '../../ticketGenerator.service';
import { ticketGeneratorModule } from '../../ticketGenerator.module';
import { ticketStub } from '../stubs';

describe('AppController Integration', () => {
  let moduleRef: TestingModule;
  let appController: ticketGeneratorController;
  let appService: ticketGeneratorService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [ticketGeneratorModule],
    }).compile();

    appController = moduleRef.get(ticketGeneratorController);
    appService = moduleRef.get(ticketGeneratorService);
  });

  describe('Generate ticket', () => {
    it('should return a qrCode', async () => {
      const res = await appController.generateQrTicket(ticketStub);
      expect(res.qrCode).toContain('<svg');
    });
  });
});
