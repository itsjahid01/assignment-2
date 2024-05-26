import { z } from "zod";

// Zod schema for TVariant
const variantValidationSchema = z.object({
  type: z.string().nonempty("Type is required"),
  value: z.string().nonempty("Value is required"),
});

// Zod schema for TInventory
const inventoryValidationSchema = z.object({
  quantity: z.number().int().positive("Quantity must be a positive number"),
  inStock: z.boolean(),
});

//Zod schema for TProduct
export const productValidationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().nonempty("Category is required"),
  tags: z
    .array(z.string().nonempty("Tags must be non-empty strings"))
    .nonempty("Tags are required"),
  variants: z.array(variantValidationSchema).nonempty("Variants are required"),
  inventory: inventoryValidationSchema,
});
