"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
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
exports.orderModel = (0, mongoose_1.model)("Order", orderSchema);
