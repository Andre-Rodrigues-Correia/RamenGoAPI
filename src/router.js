import { Router} from "express";
import orderRoutes from "./routes/orderRouter.js";
import brothsRoutes from "./routes/brothsRouter.js";
import proteinsRoutes from "./routes/proteinsRouter.js";
import {verifyToken} from "./middlewares/securityMiddleware.js";

const router = Router();

router.use('/order', orderRoutes);
router.use('/broths', brothsRoutes)
router.use('/proteins', proteinsRoutes)
router.all('/*', (req, res) => {
    return res.status(404).json({
        message: 'Route not found!'
    })
})

export default router;
