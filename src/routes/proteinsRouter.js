import {Router} from "express";
import {getProteins} from "../controllers/proteinsController.js";
import {verifyToken} from "../middlewares/securityMiddleware.js";

const proteinsRoutes = Router()

proteinsRoutes.get('/',verifyToken, getProteins);

export default proteinsRoutes;
