import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachment[];
}

interface Attachment {
    fileName: string;
    path: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments,
            });

            return true;
        } catch (error) {
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to: string | string[]) {
        const subject = 'Logs del servidor';
        const htmlBody = `
            <h3>Logs de sistema - NOC</h3>
            <p>Laborum est excepteur amet nulla magna sunt deserunt culpa Lorem ut aliqua ad laboris.</p>
            <p>Ver logs adjuntos</p>
        `;
        const attachments: Attachment[] = [
            { fileName: 'logs-all.log', path: './logs/log-all.log' },
            { fileName: 'logs-high.log', path: './logs/log-high.log' },
            { fileName: 'logs-medium.log', path: './logs/log-medium.log' },
        ];

        return this.sendEmail({
            to,
            subject,
            htmlBody,
            attachments
        });
    }
}