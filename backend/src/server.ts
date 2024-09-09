import app from "@/src/app";
import connectDB from "./database/connectDB";
import { getMethod } from "./middlewares/getMethod";
import configs from "@/src/config";

app.use(getMethod);

connectDB();

function run() {
    app.listen(configs.port, () => {
      console.log(`User Service running on Port: ${configs.port}`)
    })
 }

run();
