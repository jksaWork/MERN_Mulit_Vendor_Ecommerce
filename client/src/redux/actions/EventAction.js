import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCESS,
  GET_PRODUCT_REQUEST_ERROR,
  GET_EVENT_REQUEST_ERROR,
  GET_EVENT_REQUEST,
  GET_EVENT_REQUEST_SUCCESS,
  DELETE_EVENT_REQUEST_ERROR,
  DELETE_EVENT_REQUEST_SUCCESS,
} from ".";
import {
  // CreateProductApi,
  GetAllProductAPI,
  CreateEventApi,
  GetAllEventAPI,
  deteleEventAPI,
} from "../../utils/APIs/SallerApi";

export const CreateEventAction = (values) => async (_) => {
  console.log(values, "From Actions");
  const {
    title,
    category,
    description,
    images,
    originalPrice,
    discountPrice,
    name,
    shopId,
    start_date,
    end_date,
  } = values;
  console.log(shopId);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("originalPrice", originalPrice);
  formData.append("discountPrice", discountPrice);
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);
  //   formData.append("images", images);
  for (var i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }

  formData.append("shopId", shopId);

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  try {
    const { data } = await CreateEventApi(formData, config);
    console.log(data);

    // return true; //   console.log(data);
  } catch (e) {
    console.log("seom Thing wnet Wornd");
  }
};

export const getAllEventsActions = (id) => async (__) => {
  __({ type: GET_EVENT_REQUEST });
  try {
    const { data } = await GetAllEventAPI(id);
    // AllEventAPI(id, data);
    __({ type: GET_EVENT_REQUEST_SUCCESS, payload: data.events });
  } catch (error) {
    __({ type: GET_EVENT_REQUEST_ERROR, payload: error.message });
    console.log(error);
    throw error;
  }
};

export const deleteEventAction = (id) => async (__) => {
  try {
    const { data } = await deteleEventAPI(id);
    console.log(data);
    __({ type: DELETE_EVENT_REQUEST_SUCCESS, payload: id });
  } catch (error) {
    __({ type: DELETE_EVENT_REQUEST_ERROR, payload: error.message });
    throw error;
  }
};
