import axios from "axios";
import { STORE_SHOP_DATA } from ".";
import { server } from "../../static";
import { toast } from "react-toastify";

export const StoreShopData = (form_data, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${server}/users/shop/login`, form_data);
    dispatch({ type: STORE_SHOP_DATA, payload: data });
    navigate("/dashboard");
  } catch (e) {
    // throw e;
    // console.log("Hello World");
    toast.error(e.message);
  }
};
// export const AlertHello = (form_data, navigate) => async (dispatch) => {
//   const { data } = await axios.post(`${server}/users/shop/login`, form_data);
//   dispatch({ type: STORE_SHOP_DATA, payload: data });
// };
