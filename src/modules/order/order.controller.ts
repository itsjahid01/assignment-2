import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { orderServices } from "./order.service";
import { productModel } from "../product/product.model";
import { TProduct } from "../product/product.interface";

// Create a New Order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // validation order data by zod
    const validData = orderValidationSchema.parse(orderData);

    const { email, productId, price, quantity } = orderData;

    // find product by id
    const product = await productModel.findById(productId);

    if (!product) {
      res.status(404).send({
        success: false,
        message: "Product not found",
      });
    }

    //  product quantity check
    if (product.inventory.quantity < quantity) {
      return res.status(400).send({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // update  product quantity and inStock
    product?.inventory.quantity -= quantity;
    product?.inventory.inStock = product?.inventory.quantity > 0;
    await product.save();

    // create a new order
    const result = await orderServices.createOrder(validData);

    res.status(200).send({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(404).send({
      success: false,
      message: error.message || " Something went wrong",
      error: error,
    });
  }
};

// Create a New Order
const getAllOrder = () => {};

export const orderController = {
  createOrder,
  getAllOrder,
};
