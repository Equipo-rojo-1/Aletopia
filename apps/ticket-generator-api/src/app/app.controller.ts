import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { TicketDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('generateTicket')
  async generateQrTicket(@Body() dto: TicketDto) {
    return { qrCode: await this.appService.generateTicket(dto) };
  }
}
