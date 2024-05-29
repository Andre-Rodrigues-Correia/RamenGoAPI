import {Router} from "express";
import {createOrder} from "../controllers/orderController.js";
import {verifyToken} from "../middlewares/securityMiddleware.js";
import {validateOrder} from "../middlewares/orderMiddleware.js";
const orderRoutes = Router()

orderRoutes.post('/',verifyToken, validateOrder, createOrder);

export default orderRoutes;