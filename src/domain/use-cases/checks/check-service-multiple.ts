import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';
interface CheckServiceMultipleUseCase {
    execute(url: string): Promise<boolean>;
}

// Que puede ser inyectado? Lo definimos en los tipos
type SuccessCallBack = (() => void) | undefined;
type ErrorCallBack = ((error: string) => void) | undefined;

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {
    // No se hará estático porque se necesita una inyección
    // De manera pura (JavaScript) las inyecciones de dependencia se realizan mediante factory function. Aunque se hacen en el constructor 
    // La inyección de dependencias es un patrón de diseño donde se suministran las dependencias a una clase 
    // o módulo en lugar de que la propia clase las cree.
    constructor( // Habrá error? Se hará correctamente? Estos se usarán en todo el programa para saberlo
        private readonly logRepository: LogRepository[],
        private readonly successCallback: SuccessCallBack,
        private readonly errorCallback: ErrorCallBack,
    ) { } // Las dependencias son módulos, librerías o paquetes que un software necesita para funcionar

    private callLogs(log: LogEntity) {
        this.logRepository.forEach(logRepository => {
            logRepository.saveLog(log);
        });
    }

    public async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);

            if (!req.ok) throw new Error(`Error on check service ${url}`);

            const log = new LogEntity({
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'check-service.ts'
            });
            this.callLogs(log);
            this.successCallback && this.successCallback();

            return true;
        } catch (error) {
            const errorMessage = `${url} is not ok. ${error}`;
            const log = new LogEntity({
                message: `Service ${url} it's not working. ${error}`,
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            })

            this.callLogs(log);
            this.errorCallback && this.errorCallback(errorMessage);

            return false;
        }
    }
}