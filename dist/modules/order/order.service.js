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
exports.orderServices = void 0;
const order_model_1 = require("./order.model");
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.orderModel.create(orderData);
    return result;
    // return console.log(orderData);
});
// get all Order
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.orderModel.find();
    return orders;
});
//  get orders by email
const getOrdersByEmail = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const userOrders = yield order_model_1.orderModel.find({ email: userEmail });
    return userOrders;
});
exports.orderServices = {
    createOrder,
    getAllOrder,
    getOrdersByEmail,
};
