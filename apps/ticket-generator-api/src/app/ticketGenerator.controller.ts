import { Body, Controller, Post } from '@nestjs/common';

import { ticketGeneratorService } from './ticketGenerator.service';
import { TicketDto } from './dto';

@Controller()
export class ticketGeneratorController {
  constructor(
    private readonly ticketGeneratorService: ticketGeneratorService
  ) {}

  @Post('generateTicket')
  async generateQrTicket(@Body() dto: TicketDto) {
    const qrCode = await this.ticketGeneratorService.generateTicket(dto);
    return { qrCode };
  }
}
