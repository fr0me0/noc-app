import { envs } from './../../../config/plugins/envs.plugin';
import { MongoDataBase } from '../init';
import mongoose from 'mongoose';
import { LogModel } from './log.model';

describe('Test log.model.ts', () => {
    beforeAll(async () => {
        await MongoDataBase.connect({
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME
        })
    });

    afterAll(() => {
        mongoose.connection.close();
    });

    test('Should return LogModel', async () => {
        const logData = {
            origin: 'log.model.test.ts',
            message: 'test-message',
            level: 'low'
        };
        const log = await LogModel.create(logData);

        expect(log).toEqual(expect.objectContaining({
            ...logData,
            createdAt: expect.any(Date),
            id: expect.any(String)
        }));

        await LogModel.findByIdAndDelete(log.id);
    });

    test('Should return the schema object', () => {
        const schema = LogModel.schema.obj;

        expect(schema).toEqual(expect.objectContaining(
            {
                message: { type: expect.any(Function), required: true },
                origin: { type: expect.any(Function) },
                level: {
                    type: expect.any(Function),
                    enum: ['low', 'medium', 'high'],
                    default: 'low'
                },
                createdAt: expect.any(Object),
            }
        ));
    });
});