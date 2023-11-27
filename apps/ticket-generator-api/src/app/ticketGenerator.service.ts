import { Injectable } from '@nestjs/common';
import { TicketDto } from './dto';
import { ConfigService } from '@nestjs/config';
import QRCode from 'qrcode';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ticketGeneratorService {
  constructor(private jwt: JwtService, private config: ConfigService) {}

  async generateTicket(dto: TicketDto): Promise<string> {
    const jwt = await this.generateJwt(dto);
    return this.createQrCode(jwt);
  }

  private async generateJwt(dto: TicketDto): Promise<string> {
    const payload = {
      ...dto,
    };
    try {
      const secret: string = this.config.get('JWT_SECRET');

      const token = await this.jwt.signAsync(payload, {
        expiresIn: '1h',
        secret: secret,
      });

      return token;
    } catch (error) {
      throw new Error(error);
    }
  }

  private async createQrCode(jwt: string): Promise<string> {
    try {
      const QrCode = await QRCode.toString(jwt, { type: 'svg' });
      return QrCode;
    } catch (error) {
      throw new Error(error);
    }
  }
}
