import { envs } from './envs.plugin';

describe('Test envs.plugin.ts', () => {
    test('Should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'fromeodevs@gmail.com',
            MAILER_SECRET_KEY: '123123123',
            PROD: false,
            MONGO_URL: 'mongodb://fr0me0:123456789@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'fr0me0',
            MONGO_PASS: '123456789'
        });
    });

    test('Should return error if not found env', async () => {
        jest.resetModules();
        process.env.PORT = 'ABC';
        try {
            await import('./envs.plugin');
            expect(true).toBe(false); // Verificar que no se ejecute un error
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }
    });
});