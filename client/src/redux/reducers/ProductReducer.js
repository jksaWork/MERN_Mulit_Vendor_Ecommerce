import { createReducer } from "@reduxjs/toolkit";
import { INIT_APP, SHOP_LOG_OUT, GET_PRODUCT_REQUEST } from "../actions";

const initialState = {
  isLoading: false,
  products: null,
  error: null,
};

export const ProductReducer = createReducer(initialState, {
  GET_PRODUCT_REQUEST: (state, action) => {
    return { ...state, isLoading: true };
  },
  GET_PRODUCT_REQUEST_SUCCESS: (state, action) => {
    return { ...state, isLoading: false, products: action.payload };
  },
  GET_PRODUCT_REQUEST_ERROR: (state, action) => {
    return { ...state, isLoading: false, error: action.payload };
  },
  DELETE_PRODUCT_REQUEST_SUCCESS: (state, action) => {
    return {
      ...state,
      isLoading: false,
      products: state.products.filter((el) => el._id != action.payload),
    };
  },
});
