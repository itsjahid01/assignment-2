import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
};

export const productController = {
  createProduct,
};
