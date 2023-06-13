import express from "express";
import { getPosts } from "../controllers/PostController.js";
const router = express.Router();
router.get("/", getPosts);

export default router;
