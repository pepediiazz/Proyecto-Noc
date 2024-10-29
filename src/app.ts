import { env } from "process";
import { Server } from "./presentation/server";
import 'dotenv/config'
import { envs } from "./config/plugins/envs.plugin";


(async() => {
    main();
})();

function main() {
    //  console.log(envs);
     Server.start()
}
