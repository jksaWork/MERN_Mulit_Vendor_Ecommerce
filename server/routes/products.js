import express from "express";

const router = express.Router();
import upload from "../middleware/multer.js";
import {
  CreateProduct,
  getAllShopProduct,
} from "../controllers/ProductController.js";

// routes Hello World
router.post("/create", upload.array("images", 10), CreateProduct);
router.get("/get-all-products/:id", getAllShopProduct);

export default router;
