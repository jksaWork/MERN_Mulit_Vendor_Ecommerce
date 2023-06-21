import path from "path";
import express from "express";
import ErrorHandler from "../utils/ErrorHandler.js";
import User from "../Models/User.js";
import Shop from "../Models/Shop.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

export const creatShop = async (req, res, next) => {
  // How Area You
  // console.log("Accept Request");
  const { name, email, password, zipCode, address } = req.body;

  const user_exists = await User.findOne({ email });
  console.log(user_exists);
  if (user_exists) {
    return next(new ErrorHandler("User Is Alery Exist", 400));
  }
  const avatar = path.join(req.file.filename);
  const shop = {
    name,
    password,
    email,
    avatar,
    zipCode,
    address,
  };

  const newShop = new Shop(shop);
  console.log("User Saves");
  newShop.save();
  const activeationToken = createActivationToken(newShop);
  const activeUrl =
    `http://localhost:5173/saller/activation/${activeationToken}`.replaceAll(
      ".",
      "-"
    );
  try {
    await sendMail({
      message: `your acount is created Succesfuly click the 
     activation links to activate you account ${activeUrl}`,
      subject: "Activate Your Account",
      to: newShop.email,
    });
  } catch (e) {
    console.log("Errorr With Sending Mail", e.message);
  }
  return res.status(201).json({
    status: true,
    message: "Your Account Is Created Success Check Your Inbox",
  });
};

export const ActivateShop = async (req, res, next) => {
  try {
    const { activation_token } = req.params;
    console.log(activation_token);
    const { id } = jwt.verify(activation_token, process.env.JWT_ACTIVATION_KEY);
    // console.log(user);
    const shop = await Shop.findByIdAndUpdate(id, { activated: true });
    const token = shop.getJwtToken();
    return res.json({
      message: "Your Account Activated Seccfuly",
      token,
      shop,
    });
  } catch (e) {
    return next(new ErrorHandler(e.message));
  }
};

const createActivationToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_ACTIVATION_KEY, {
    expiresIn: 60 * 60 * 60 * 24,
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

export const getUser = (req, res) => {
  res.json({ status: true, user: req.user });
};
