import express from 'express'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from 'cors'
import router from "./router.js";
import {convertTextToJson} from "./middlewares/utilsMiddleware.js";

dotenv.config();

const app = express()

app.use(
    express.json(),
    express.text(),
    convertTextToJson,
    cors(),
    router
)

export default app;

