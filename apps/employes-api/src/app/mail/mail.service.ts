import { ConfigService } from "@nestjs/config";
import { SentMessageInfo } from "nodemailer";
import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor(configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: configService.get('HOST_MAIL'),
            port: configService.get('PORT_MAIL'),
            secure: true,
            auth: {
                user: configService.get('USER_MAIL'),
                pass: configService.get('PASS_MAIL'),
            },
        });
    }

    async sendMail(): Promise<SentMessageInfo> {
        const info = await this.transporter.sendMail({
            from: '"password 👻" <equiporojo250@gmail.com>',
            to: 'duffyalternativo@gmail.com',
            subject: 'Correo',
            html: '<b>aqui esta la contrasena ?</b>',
        });
        
        console.log('Message sent: %s', info.messageId);
        return info;
    }
}