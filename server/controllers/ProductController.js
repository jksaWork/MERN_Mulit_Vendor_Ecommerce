import Product from "../Models/Product.js";
import Shop from "../Models/Shop.js";
import ErrorHandler from "../utils/ErrorHandler.js";

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
