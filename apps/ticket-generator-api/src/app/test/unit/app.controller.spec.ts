import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { qrCodeStub, ticketStub } from '../stubs';

jest.mock('../../app.service');

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    jest.clearAllMocks();
  });

  describe('generate Ticket', () => {
    it('should return a qr code on svg format', async () => {
      expect(await appController.generateQrTicket(ticketStub)).toBe(qrCodeStub);
    });
  });
});
