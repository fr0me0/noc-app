export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
}

// Gobernará la aplicación siempre que tengamos que trabajar con una base de datos
export class LogEntity {
    // Que propiedades tendremos en nuestros logs?
    public level: LogSeverityLevel; // Enum
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        const { message, level, origin, createdAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    // Crea instancias entity a partir del formato del JSON
    static fromJson = (json: string): LogEntity => {
        json = (json === '') ? '{}' : json;
        const { message, level, createdAt, origin } = JSON.parse(json)
        const log = new LogEntity({
            message,
            level,
            createdAt: new Date(createdAt),
            origin,
        });

        return log;
    };

    // Necesito una entidad de log para poder ser obtenida de la base de datos
    /*
        [key: string]: any para indicar que el objeto puede tener cualquier cantidad de propiedades 
        y que el nombre de estas propiedades es un string.
    */
    static fromObject = (object: { [key: string]: any }): LogEntity => {
        const { message, level, createdAt, origin } = object
        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin,
        });

        return log;
    }
}