import { LogEntity } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
import { SendEmailLogs } from "./send-email-logs";

describe('Test send-email-logs.ts', () => {
    const mockEmailService = {
        sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true)
    };
    const mockLogRepository: LogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    test('Should call sendEmail and saveLog', async () => {
        const sendEmailLogs = new SendEmailLogs(
            mockEmailService as any,
            mockLogRepository
        );
        const result = await sendEmailLogs.execute('franco@franco.com');

        expect(result).toBeTruthy();
    });
});