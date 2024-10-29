import { error } from "console";
import { CheckService } from "../domain/use-cases/checks/check-service";
import {CronService} from "./cron/cron.service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repositories";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)

export class Server {
    public static start(){

        console.log("Server started...");

        CronService.createJob(
            "*/10 * * * * *",
            () => {

                new CheckService(  
                fileSystemLogRepository,              
                () => {},
                () => console.log ( error),).execute("https://google.com")
            }
        );


    }
}

