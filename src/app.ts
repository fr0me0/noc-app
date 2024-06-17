import { PrismaClient } from '@prisma/client';
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

    const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message',
    //         origin: 'App.ts',
    //     }
    // });
    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // });
    // console.log(logs);

    Server.start();
}