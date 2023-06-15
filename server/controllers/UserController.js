import path from "path";
import express from "express";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

export const creatUser = async (req, res, next) => {
  // How Area You
  // console.log("Accept Request");
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
  console.log("User Saves");
  newUser.save();
  const activeationToken = createActivationToken(newUser);
  const activeUrl =
    `http://localhost:5173/activation/${activeationToken}`.replaceAll(".", "-");
  try {
    await sendMail({
      message: `your acount is created Succesfuly click the 
     activation links to activate you account ${activeUrl}`,
      subject: "Activate Your Account",
      to: newUser.email,
    });
  } catch (e) {
    console.log("Errorr With Sending Mail");
  }
  return res.status(201).json({
    status: true,
    message: "Your Account Is Created Success Check Your Inbox",
  });

  //   console.log(user);
};

export const ActivateUser = async (req, res, next) => {
  const { activation_token } = req.params;
  console.log(activation_token);
  const { id } = jwt.verify(activation_token, process.env.JWT_ACTIVATION_KEY);
  // console.log(user);
  const user = await User.findByIdAndUpdate(id, { activated: true });
  const token = user.getJwtToken();
  return res.json({ message: "Your Account Activated Seccfuly", token, user });
};

const createActivationToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_ACTIVATION_KEY, {
    expiresIn: 604800,
  });
};

export const UserLogin = async (req, res, next) => {
  console.log("Hello World");
  const { email, password } = req.body;
  if (!email || !password)
    return next(new ErrorHandler("Please Provide All Filed"));
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("No Such User With This Credtioal"));
  }
  // Check IS PassWord IS Valid
  const passwordIsValid = user.comparePassword(password);
  if (!passwordIsValid)
    next(new ErrorHandler("No Such User With This Credtioal"));
  const token = user.getJwtToken();
  return res.json({ message: "Your Account Activated Seccfuly", token, user });
};
