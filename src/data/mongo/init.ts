import mongoose from 'mongoose';

// Que necesito para conectarme?
interface ConnectionOptions {
    mongoUrl: string;
    dbName: string;
}

export class MongoDataBase {
    static async connect(options: ConnectionOptions) {
        const { mongoUrl, dbName } = options;

        try {
            await mongoose.connect(mongoUrl, {
                dbName,
            });

            console.log('Mongo connected');
        } catch (error) {
            console.log('Mongo connection error');

            throw error;
        }
    }
}