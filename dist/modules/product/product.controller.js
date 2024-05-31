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
exports.productController = void 0;
const product_validation_1 = require("./product.validation");
const product_service_1 = require("./product.service");
// createProduct---------------
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const validData = product_validation_1.productValidationSchema.parse(productData);
        const result = yield product_service_1.productServices.createProductToDb(validData);
        res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
});
// get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productServices.getAllProducts();
        res.status(200).send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
});
// get A Product by id -------------------
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.productServices.getAProduct(id);
        if (!result) {
            res.status(400).send({
                success: false,
                message: "Product not found",
            });
        }
        res.status(200).send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
});
// update Product by id -------------------
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const productData = req.body;
        const validData = product_validation_1.productValidationSchema.parse(productData);
        const result = yield product_service_1.productServices.updateProductById(id, validData);
        res.status(200).send({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Something went wrong",
        });
    }
});
// delete a Product-------------------
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.productServices.deleteProduct(productId);
        res.status(200).send({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: error.message || "Something went wrong",
            error: error,
        });
    }
});
// get product by searchTerm or get All Products-------------------
const searchTermOrGetAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    if (searchTerm) {
        try {
            //get orders by user email
            const products = yield product_service_1.productServices.searchProducts(searchTerm);
            if (products.length === 0) {
                res.status(400).send({
                    success: false,
                    message: `Products not found matching ${searchTerm}`,
                });
            }
            res.status(200).send({
                success: true,
                message: `Products matching search term ${searchTerm} fetched successfully!`,
                data: products,
            });
        }
        catch (error) {
            res.status(404).send({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    }
    else {
        getAllProducts(req, res);
    }
});
exports.productController = {
    createProduct,
    searchTermOrGetAllProducts,
    getProductById,
    updateProduct,
    deleteProducts,
};
