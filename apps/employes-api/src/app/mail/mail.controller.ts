import { Controller, Param, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {

    constructor(private readonly mailService: MailService) { }
    
    @Post('send')
    sendMail(@Param() to: string, @Param() subject: string, @Param() html: string) {
        return this.mailService.sendMail(to, subject, html);
    }
}