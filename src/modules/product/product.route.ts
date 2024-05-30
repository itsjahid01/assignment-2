import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.searchTermOrGetAllProducts);
router.get("/:productId", productController.getProductById);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProducts);

export const productRoutes = router;
