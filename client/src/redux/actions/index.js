export const INIT_APP = "INIT_APP";
export const USER_LOG_OUT = "USER_LOG_OUT";
export const SHOP_LOG_OUT = "SHOP_LOG_OUT";
export const STORE_SHOP_DATA = "STORE_SHOP_DATA";
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_REQUEST_ERROR = "GET_PRODUCT_REQUEST_ERROR";
export const GET_PRODUCT_REQUEST_SUCCESS = "GET_PRODUCT_REQUEST_SUCCESS";

export const InitApp = () => async (___) => {
  ___({ type: INIT_APP });
};
