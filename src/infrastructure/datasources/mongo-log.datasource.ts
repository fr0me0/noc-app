import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogModel } from '../../data/mongo/models/log.model';

export class MongoLogDatasource implements LogDatasource {
    async saveLogs(log: LogEntity): Promise<void> {
        const newLog = await LogModel.create(log);
        // await newLog.save(); // Opcional
        console.log('Mongo Log Created: ', newLog.id);
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const logs = await LogModel.find({
            level: severityLevel,
        });

        return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
    }
}