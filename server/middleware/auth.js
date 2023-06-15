import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
// import Shop from "../model/shop";

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});

const isSeller = catchAsyncErrors(async (req, res, next) => {
  const { seller_token } = req.cookies;
  if (!seller_token) {
    return next(new ErrorHandler("Please login to continue", 401));
  }

  const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);

  // req.seller = await Shop.findById(decoded.id);

  next();
});

const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(`${req.user.role} can not access this resources!`)
      );
    }
    next();
  };
};

export const Auth = (req, res, next) => {
  //   console.log(req.headers.Authorization);
  //   console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const { id, user } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = user;
    req.userId = id;
  }
  next();
};

export default { Auth, isSeller, isAuthenticated, isAdmin };
