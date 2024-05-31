"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    productId: zod_1.z.string().nonempty("Product ID is required"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    quantity: zod_1.z.number().int().positive().min(1, "Quantity must be at least 1"),
});
