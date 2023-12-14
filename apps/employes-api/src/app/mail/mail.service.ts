import { ConfigService } from "@nestjs/config";
import { SentMessageInfo } from "nodemailer";
import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService  {

    constructor(private readonly configService: ConfigService) {}

    async sendMail(to: string, subject: string, html: string): Promise<SentMessageInfo> {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'equiporojo250@gmail.com',
                pass: 'mpib qjcq xnzn vszn',
            } 
        });

        const info = await transporter.sendMail({
            from: '"password 👻" <equiporojo250@gmail.com>',
            to: to,
            subject: subject,
            html: html,
        });  

        return info;
    }
}