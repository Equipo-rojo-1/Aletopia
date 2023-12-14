import * as nodemailer from "nodemailer";
import { SentMessageInfo } from "nodemailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: 'equiporojo250@gmail.com',
                pass: 'mpib qjcq xnzn vszn',
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