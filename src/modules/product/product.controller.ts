import { Request, Response } from "express";
import { productValidationSchema } from "./product.validation";
import { productServices } from "./product.service";

// createProduct---------------
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validData = productValidationSchema.parse(productData);

    const result = await productServices.createProductToDb(validData);

    res.status(200).send({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts();

    res.status(200).send({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get A Product by id -------------------
const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productServices.getAProduct(id);
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
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// update Product by id -------------------
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const productData = req.body;
    const validData = productValidationSchema.parse(productData);

    const result = await productServices.updateProductById(id, validData);

    res.status(200).send({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

// delete a Product-------------------
const deleteProducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productServices.deleteProduct(productId);

    res.status(200).send({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// get product by searchTerm or get All Products-------------------
const searchTermOrGetAllProducts = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  if (searchTerm) {
    try {
      //get orders by user email
      const products = await productServices.searchProducts(
        searchTerm as string
      );
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
    } catch (error: any) {
      res.status(404).send({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  } else {
    getAllProducts(req, res);
  }
};

export const productController = {
  createProduct,
  searchTermOrGetAllProducts,
  getProductById,
  updateProduct,
  deleteProducts,
};
