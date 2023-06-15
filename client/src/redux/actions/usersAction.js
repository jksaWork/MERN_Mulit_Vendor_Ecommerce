import axios from "axios";
import { server } from "../../static";
import { API } from "../../utils/fetcher.js";
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
