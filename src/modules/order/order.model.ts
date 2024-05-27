import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be a positive number"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity must be a positive number"],
  },
});

export const orderModel = model<TOrder>("Order", orderSchema);
