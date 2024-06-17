import mongoose from 'mongoose';
import { MongoDataBase } from './init';

describe('Test init.ts (MongoDB)', () => {
    // Warning de gracefully exit
    afterAll(() => {
        mongoose.connection.close();
    });

    test('Should connect to MongoDB', async () => {
        const connected = await MongoDataBase.connect({
            mongoUrl: process.env.MONGO_URL!,
            dbName: process.env.MONGO_DB_NAME!
        });

        expect(connected).toBeTruthy();
    });

    test('Should return an error', async () => {
        try {
            const connected = await MongoDataBase.connect({
                mongoUrl: 'mongodb://fr0me0:123456789@localhostinger:27017/',
                dbName: process.env.MONGO_DB_NAME!
            });

            expect(true).toBeFalsy();
        } catch (error) {
        }
    });
});