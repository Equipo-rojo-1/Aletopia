import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { AppModule } from '../../app.module';

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

  /* describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = moduleRef.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  }); */
});
