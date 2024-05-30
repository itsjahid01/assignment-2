import { TOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
  // return console.log(orderData);
};

// get all Order
const getAllOrder = async () => {
  const orders = await orderModel.find();
  return orders;
};

//  get orders by email
const getOrdersByEmail = async (userEmail: string) => {
  const userOrders = await orderModel.find({ email: userEmail });
  return userOrders;
};

export const orderServices = {
  createOrder,
  getAllOrder,
  getOrdersByEmail,
};
