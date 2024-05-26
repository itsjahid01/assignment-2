import { Request, Response } from "express";
import { productValidationSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const validData = productValidationSchema.parse(product);
  console.log(validData);
};

export const productController = {
  createProduct,
};
