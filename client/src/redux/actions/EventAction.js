import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST_SUCCESS,
  GET_PRODUCT_REQUEST_ERROR,
} from ".";
import {
  // CreateProductApi,
  GetAllProductAPI,
  CreateEventApi,
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
    return true; //   console.log(data);
  } catch (e) {
    console.log("seom Thing wnet Wornd");
  }
};

export const getAllProductsActions = (id) => async (__) => {
  __({ type: GET_PRODUCT_REQUEST });
  try {
    const { data } = await GetAllProductAPI(id);
    __({ type: GET_PRODUCT_REQUEST_SUCCESS, payload: data.products });
  } catch (error) {
    __({ type: GET_PRODUCT_REQUEST_ERROR, payload: error.message });
  }
};
