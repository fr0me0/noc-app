import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
    static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
        const job = new CronJob(cronTime, onTick);

        job.start();

        return job;
        // En caso de querer usarlo fuera de esta clase para detenerlo modificarlo etcetc.
    }
}