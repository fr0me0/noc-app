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

    Server.start();
}