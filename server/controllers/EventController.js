import Event from "../Models/Event.js";
import Shop from "../Models/Shop.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import fs from "fs";

export const CreateEvent = async (req, res, next) => {
  console.log("Request Is Resvied   213123");
  const shopId = req.body.shopId;
  console.log(shopId);
  const shop = await Shop.findById(shopId);
  if (!Shop) {
    return next(ErrorHandler("The Shops Id Is Valid"));
  } else {
    console.log(req.files, req.images);
    const IamgesUrl = req.files.map((file) => `${file.filename}`);
    const EventModelData = req.body;
    EventModelData.images = IamgesUrl;
    EventModelData.shop = shop;
    EventModelData.shopId = shopId;

    console.log(req.body, EventModelData);
    const event = await Event.create(EventModelData);
    res.status(201).json({
      message: "event Created Success Fuley",
      event,
    });
  }
};

export const getEvents = async (req, res, next) => {
  const id = req.params.id;
  try {
    const events = await Event.find({ shopId: id });
    res.status(201).json({
      message: "Product Fetched Success",
      events,
    });
  } catch (error) {
    next(ErrorHandler(error.message));
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    // console.log(productId);
    const evntData = await Event.findById(eventId);
    if (!evntData) {
      return next(new ErrorHandler("Pleas Provide Valid id!", 500));
    }
    evntData.images.forEach((imageUrl) => {
      const filename = imageUrl;
      const filePath = `uploads/${filename}`;

      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

    const event = await Event.findByIdAndDelete(eventId);

    if (!event) {
      return next(new ErrorHandler("Product not found with this id!", 500));
    }

    res.status(201).json({
      success: true,
      message: "Product Deleted successfully!",
    });
  } catch (error) {
    return next(new ErrorHandler(error, 400));
  }
};
