// import { CronService } from './cron/cron-service';
// import { CheckServiceMultiple } from '../domain/use-cases/checks/check-service-multiple';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource';
import { MongoLogDatasource } from '../infrastructure/datasources/mongo-log.datasource';
import { EmailService } from './email/email-service';
import { PostgresLogDatasource } from '../infrastructure/datasources/posgres-log.datasource';

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(),
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource(),
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);

const emailService = new EmailService();

export class Server {
    // Se hace estática solo por comodidad de no tener que crear una nueva instancia de la clase
    public static async start() {
        console.log('Server started...');
        // !Envio de email
        /*
            new sendEmailLogs(emailService, fileSystemLogRepository).execute(['francoromeo011@gmail.com'])

            emailService.sendEmailWithFileSystemLogs(
                
            );

            const emailService = new EmailService();
            emailService.sendEmail({
                to: 'francoromeo011@gmail.com',
                subject: 'Logs de sistema',
                htmlBody: `
                    <h3>Logs de sistema - NOC</h3>
                    <p>Laborum est excepteur amet nulla magna sunt deserunt culpa Lorem ut aliqua ad laboris.</p>
                    <p>Ver logs adjuntos</p>
                `,
            });
        */

        // !Tarea cronometrada
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com/';
        //         new CheckServiceMultiple(
        //             [fsLogRepository, postgresLogRepository, mongoLogRepository],
        //             () => console.log(`${url} is OK`),
        //             (error) => console.log(error),
        //         ).execute(url);
        //     },
        // );
    }
}