import express from "express";
import {
  creatUser,
  ActivateUser,
  UserLogin,
  getUser,
} from "../controllers/UserController.js";
const router = express.Router();
import upload from "../middleware/multer.js";
import { Auth } from "../middleware/auth.js";

// routes
router.post("/create", upload.single("file"), creatUser);
router.get("/activation/:activation_token", ActivateUser);
router.get("/getUser", Auth, getUser);
router.get("/", (_, res) => {
  res.send("Hello World");
});
router.post("/login", UserLogin);

export default router;
