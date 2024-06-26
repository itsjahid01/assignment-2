import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.searchOrGetAllOrder);
// router.get("/", orderController.getOrdersByEmail);

export const orderRoutes = router;
