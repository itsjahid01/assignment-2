import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z.string().email("Invalid email address"),
  productId: z.string().nonempty("Product ID is required"),
  price: z.number().positive("Price must be a positive number"),
  quantity: z.number().int().positive().min(1, "Quantity must be at least 1"),
});
