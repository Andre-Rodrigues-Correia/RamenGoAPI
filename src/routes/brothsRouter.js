import {Router} from "express";
import {getBroths} from "../controllers/brothsController.js";
import {verifyToken} from "../middlewares/securityMiddleware.js";

const brothsRoutes = Router()

brothsRoutes.get('/', verifyToken, getBroths);

export default brothsRoutes;
