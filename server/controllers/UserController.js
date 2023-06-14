import path from "path";
import express from "express";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../Models/User.js";

export const creatUser = async (req, res, next) => {
  // How Area You
  const { fullname, email, password } = req.body;

  const user_exists = await User.findOne({ email });
  console.log(user_exists);
  if (user_exists) {
    return next(new ErrorHandler("User Is Alery Exist", 400));
  }
  const avatar = path.join(req.file.filename);
  const user = {
    fullname,
    password,
    email,
    avatar,
  };

  const newUser = new User(user);
  newUser.save();
  return res.status(201).json({
    status: true,
    user: newUser,
  });

  //   console.log(user);
};
