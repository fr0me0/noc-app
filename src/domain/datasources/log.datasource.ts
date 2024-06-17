import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Abstract class no podrá ser instanciada. Obligaremos el comportamiento (contrato).
export abstract class LogDatasource {
    abstract saveLogs(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}