import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, "Quantity must be a positive number"],
  },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    required: [true, "Price must be a positive number"],
  },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// create text index for searching
productSchema.index({
  name: "text",
  description: "text",
  tags: "text",
  category: "text",
});
export const productModel = model<TProduct>("Product", productSchema);
