import Event from "../Models/Event.js";
import Shop from "../Models/Shop.js";
import ErrorHandler from "../utils/ErrorHandler.js";
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
