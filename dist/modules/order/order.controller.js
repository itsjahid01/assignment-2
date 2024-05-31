"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const product_model_1 = require("../product/product.model");
// Create a New Order -------------------------
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        // validation order data by zod
        const validData = order_validation_1.orderValidationSchema.parse(orderData);
        const { email, productId, price, quantity } = orderData;
        // find product by id
        const product = yield product_model_1.productModel.findById(productId);
        if (product !== null) {
            //  product quantity check
            if (product.inventory.quantity < quantity) {
                return res.status(400).send({
                    success: false,
                    message: "Insufficient quantity available in inventory",
                });
            }
            // update  product quantity and inStock status
            product.inventory.quantity -= quantity;
            product.inventory.inStock = product.inventory.quantity > 0;
            yield product.save();
            // create a new order
            const result = yield order_service_1.orderServices.createOrder(validData);
            res.status(200).send({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: error.message || " Something went wrong",
            error: error,
        });
    }
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get all Orders
        const result = yield order_service_1.orderServices.getAllOrder();
        res.status(200).send({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(404).send({
            success: false,
            message: "Order not found",
            error: error.message,
        });
    }
});
// get all Order or get order by email---------------
const searchOrGetAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.query.email;
    if (userEmail) {
        try {
            //get orders by user email
            const userOrder = yield order_service_1.orderServices.getOrdersByEmail(userEmail);
            if ((userOrder === null || userOrder === void 0 ? void 0 : userOrder.length) === 0) {
                res.status(400).send({
                    success: false,
                    message: `Orders not found matching email ${userEmail}`,
                });
            }
            res.status(200).send({
                success: true,
                message: `Orders fetched successfully for user ${userEmail}!`,
                data: userOrder,
            });
        }
        catch (error) {
            res.status(404).send({
                success: false,
                message: "Order not found",
                error: error.message,
            });
        }
    }
    else {
        getAllOrder(req, res);
    }
});
exports.orderController = {
    createOrder,
    searchOrGetAllOrder,
};
