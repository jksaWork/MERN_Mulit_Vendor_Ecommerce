import { createReducer } from "@reduxjs/toolkit";
import { INIT_APP, SHOP_LOG_OUT } from "../actions";

const initialState = {
  token: null,
  isAuthenticated: null,
  shop: null,
};

export const ShopReducer = createReducer(initialState, {
  INIT_APP: (state, action) => {
    const shop_data = JSON.parse(localStorage.getItem("shop_data"));
    if (shop_data) {
      const { shop_token, shop } = shop_data;
      return { ...state, token: shop_token, shop, isAuthenticated: true };
    }
    return { ...state, token: null, user: null, isAuthenticated: false };
  },

  STORE_SHOP_DATA: (state, action) => {
    console.log(action);
    console.log("userdata -------", action);
    state.token = action.payload.shop_token;
    state.shop = action.payload.shop;
    state.isAuthenticated = true;
    console.log("Hello World");
    localStorage.setItem(
      "shop_data",
      JSON.stringify({
        token: action.payload.shop_token,
        shop: action.payload.shop,
      })
    );

    return state;
  },
  SHOP_LOG_OUT: (state, action) => {
    localStorage.removeItem("shop_data");
    return { ...state, token: null, shop: null, isAuthenticated: false };
  },
});
