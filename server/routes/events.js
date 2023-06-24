import express from "express";

const router = express.Router();
import upload from "../middleware/multer.js";

import { CreateEvent, getEvents } from "../controllers/EventController.js";
// routes Hello World
router.post("/create", upload.array("images", 10), CreateEvent);
router.get("/get-events/:id", getEvents);

export default router;
