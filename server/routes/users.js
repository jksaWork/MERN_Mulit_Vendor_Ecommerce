import express from "express";
import {
  creatUser,
  ActivateUser,
  UserLogin,
} from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.js";
router.post("/create", upload.single("file"), creatUser);
router.get("/activation/:activation_token", ActivateUser);
router.get("/", (_, res) => {
  res.send("Hello World");
});
router.post("/login", UserLogin);

export default router;
