import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PostRouters from "./routes/post.js";
const app = express();
import connnect from "./database/index.js";
// app.listen(3000, () => console.log("hello World"));
import ErrorHandler from "./utils/ErrorHandler.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

process.on("uncaughtException", (e) => {
  console.log(`Error Message ${e.message}`);
  console.log(`Error Line ${e.code}`);
});

if (process.env.NODE_ENV == "porduction") {
  require("dotenv").config({
    path: "/server/config/.env",
  });
}

connnect();
app.use(ErrorHandler);
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App Is Runing in port  http://127.0.0.1:${port}`);
});

// Process With Mangements
process.on("unhandledRejection", (e) => {
  console.log(`UN Handel Rejection ${e.message}`);
  server.close(() => {
    process.exit(1);
  });
});
