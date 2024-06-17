// import { CheckService } from '../domain/use-cases/checks/check-service';
// import { CronService } from './cron/cron-service';
// import { sendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { EmailService } from './email/email-service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
    // Se hace estática solo por comodidad de no tener que crear una nueva instancia de la clase
    public static start() {
        console.log('Server started...');
        // Envio de email
        // new sendEmailLogs(emailService, fileSystemLogRepository).execute(['francoromeo011@gmail.com'])

        // emailService.sendEmailWithFileSystemLogs(
        //     
        // );

        // const emailService = new EmailService();
        // emailService.sendEmail({
        //     to: 'francoromeo011@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //         <h3>Logs de sistema - NOC</h3>
        //         <p>Laborum est excepteur amet nulla magna sunt deserunt culpa Lorem ut aliqua ad laboris.</p>
        //         <p>Ver logs adjuntos</p>
        //     `,
        // });


        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com/';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is OK`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000/');
        //     },
        // );
        
        // MongoDB
        
    }
}