"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
// Zod schema for TVariant
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty("Type is required"),
    value: zod_1.z.string().nonempty("Value is required"),
});
// Zod schema for TInventory
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive("Quantity must be a positive number"),
    inStock: zod_1.z.boolean(),
});
//Zod schema for TProduct
exports.productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Name is required"),
    description: zod_1.z.string().nonempty("Description is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    category: zod_1.z.string().nonempty("Category is required"),
    tags: zod_1.z
        .array(zod_1.z.string().nonempty("Tags must be non-empty strings"))
        .nonempty("Tags are required"),
    variants: zod_1.z.array(variantValidationSchema).nonempty("Variants are required"),
    inventory: inventoryValidationSchema,
});
