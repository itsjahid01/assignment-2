import express, { Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./modules/product/product.route";
import { orderRoutes } from "./modules/order/order.route";
const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to E-commerce server!");
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: " Route not found",
  });
});

export default app;
