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
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProductToDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.create(productData);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find();
    return result;
});
const getAProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findById(id);
    return result;
});
const updateProductById = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndDelete(id);
    return result;
});
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.find({ $text: { $search: searchTerm } });
    return result;
});
exports.productServices = {
    createProductToDb,
    getAllProducts,
    getAProduct,
    updateProductById,
    deleteProduct,
    searchProducts,
};
