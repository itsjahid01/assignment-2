import { TOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
  // return console.log(orderData);
};
const getAllOrder = () => {};

export const orderServices = {
  createOrder,
  getAllOrder,
};
