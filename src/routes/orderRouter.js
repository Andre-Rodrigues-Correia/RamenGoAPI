import {Router} from "express";
import {createOrder} from "../controllers/orderController.js";
import {verifyToken} from "../middlewares/securityMiddleware.js";
const orderRoutes = Router()

orderRoutes.post('/',verifyToken, createOrder);

export default orderRoutes;