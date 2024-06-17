import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Permitirá llamar metodos del datasource
export abstract class LogRepository {
    // Se tendrá al datasource
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}