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
import { creatShop, ActivateShop } from "../controllers/ShopController.js";

// routes
router.post("/create", upload.single("file"), creatUser);
router.post("/create-saller", upload.single("file"), creatShop);
router.get("/activation/:activation_token", ActivateUser);
router.get("/sallers/activation/:activation_token", ActivateShop);

router.get("/getUser", Auth, getUser);
router.get("/", (_, res) => {
  res.send("Hello World");
});
router.post("/login", UserLogin);

export default router;
