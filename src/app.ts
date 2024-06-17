import { Server } from './presentation/server';
import { LogModel, MongoDataBase } from './data/mongo';
import { envs } from './config/plugins/envs.plugin';

(async () => {
    main();
})();

async function main() {
    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });

    // Crear una coleccion = tables, documento = registro
    const newLog = await LogModel.create({
        message: 'Test Message desde Mongo',
        origin: 'App.ts',
        level: ''
    })

    // Server.start();
}