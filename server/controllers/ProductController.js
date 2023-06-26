import Product from "../Models/Product.js";
import Shop from "../Models/Shop.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import fs from "fs";

export const CreateProduct = async (req, res, next) => {
  console.log("Request Is Resvied");
  const shopId = req.body.shopId;
  const shop = await Shop.findById(shopId);
  if (!Shop) {
    return next(ErrorHandler("The Shops Id Is Valid"));
  } else {
    console.log(req.files, req.images);
    const IamgesUrl = req.files.map((file) => `${file.filename}`);
    const productModelData = req.body;
    productModelData.images = IamgesUrl;
    productModelData.shop = shop;
    productModelData.shopId = shopId;

    console.log(req.body, productModelData);
    const product = await Product.create(productModelData);
    res.status(201).json({
      message: "Product Created SuccessFuley",
      product,
    });
  }
};

export const getAllShopProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const products = await Product.find({ shopId: id });
    res.status(201).json({
      message: "Product Fetched Success",
      products,
    });
  } catch (error) {
    next(new ErrorHandler(error.message));
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const productData = await Product.findById(productId);
    if (!productData) {
      return next(new ErrorHandler("Pleas Provide Valid id!", 500));
    }
    productData.images.forEach((imageUrl) => {
      const filename = imageUrl;
      const filePath = `uploads/${filename}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return next(new ErrorHandler("Product not found with this id!", 500));
    }

    res.status(201).json({
      success: true,
      message: "Product Deleted successfully!",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
