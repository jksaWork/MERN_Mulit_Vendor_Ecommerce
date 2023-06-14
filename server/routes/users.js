import express from "express";
import { creatUser } from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.js";
router.post("/create", upload.single("file"), creatUser);
router.get("/", (_, res) => {
  res.send("Hello World");
});
export default router;
