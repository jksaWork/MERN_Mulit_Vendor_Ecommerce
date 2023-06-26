import express from "express";

const router = express.Router();
import upload from "../middleware/multer.js";

import {
  CreateEvent,
  deleteEvent,
  getEvents,
} from "../controllers/EventController.js";
// routes Hello World
router.post("/create", upload.array("images", 10), CreateEvent);
router.get("/get-events/:id", getEvents);
router.delete("/:id", deleteEvent);
export default router;
