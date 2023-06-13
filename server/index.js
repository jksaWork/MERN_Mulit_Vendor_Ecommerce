import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import PostRouters from "./routes/post.js";
const app = express();

const uri =
  "mongodb+srv://jksa_1234:jksa_1234_jksa@cluster0.d5s4h0b.mongodb.net/";

app.use(bodyParser.json({ limit: "30mb", extends: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extends: true }));
app.use("/api/posts", PostRouters);
mongoose
  .connect(uri)
  .then(() =>
    app.listen(3000, () =>
      console.log("Your App Is Running  on http://127.0.0.1:3000")
    )
  )
  .catch((err) => console.log(err.message));

console.log("Hello Affter Requiremnt");
