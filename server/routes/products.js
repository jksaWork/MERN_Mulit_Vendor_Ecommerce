import express from "express";

const router = express.Router();
import upload from "../middleware/multer.js";
import { CreateProduct } from "../controllers/ProductController.js";

// routes Hello World
router.post("/create", upload.array("images", 10), CreateProduct);

export default router;
