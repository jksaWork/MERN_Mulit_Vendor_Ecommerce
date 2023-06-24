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
import UserRouter from "./routes/users.js";
import ProductRouter from "./routes/products.js";
import EventsRouter from "./routes/events.js";

import { configDotenv } from "dotenv";

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/", express.static("uploads"));
app.use(bodyParser.json({ limit: "30mb", extends: true }));

process.on("uncaughtException", (e) => {
  console.log(`Error Message ${e.message}`);
  console.log(`Error Line ${e.code}`);
});

if (process.env.NODE_ENV == "porduction") {
  configDotenv({
    path: "/server/config/.env",
  });
} else {
  configDotenv({
    path: "./.env",
  });
}

connnect();
// app.use(ErrorHandler);
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/events", EventsRouter);
const port = process.env.PORT || 3000;
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
