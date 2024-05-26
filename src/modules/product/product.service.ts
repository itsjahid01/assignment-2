import { object } from "zod";
import { TProduct } from "./product.interface";
import { productModel } from "./product.model";

const createProductToDb = async (productData: TProduct) => {
  const result = await productModel.create(productData);
  return result;
};

const getAllProducts = async () => {
  const result = await productModel.find();
  return result;
};

const getAProduct = async (id: any) => {
  const result = await productModel.findById(id);
  return result;
};

const updateProductById = async (id: any, product: TProduct) => {
  const result = await productModel.findByIdAndUpdate(id, product, {
    new: true,
  });
  return result;
};

const deleteProduct = async (id: any) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};

export const productServices = {
  createProductToDb,
  getAllProducts,
  getAProduct,
  updateProductById,
  deleteProduct,
};
