import axios from "axios";
import { server } from "../../static";
import { API } from "../../utils/APIs/fetcher.js";
import { USER_LOG_OUT, STORE_SHOP_DATA } from ".";
export const StoreUser = (data, navigate) => async (dispatch) => {
  console.log(data);
  dispatch({ type: "storeuseruata", payload: data });
  navigate("/");
};

export const getUserData = () => async (dispatch) => {
  const { data } = await API.get(`${server}/users/getUser`);
  //   dispatch({ type: "storeuseruata", payload: data });
  console.log(data);
};

export const userLogOut = (navigate) => async (__) => {
  __({ type: USER_LOG_OUT, payload: null });
  console.log("Logo Out");
  navigate("/");
  location.href.reload();
};
