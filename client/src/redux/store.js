import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";
import { ShopReducer } from "./reducers/ShopReducer";
import { ProductReducer } from "./reducers/ProductReducer";
export const store = configureStore({
  reducer: {
    shop: ShopReducer,
    products: ProductReducer,
    usersReducer,
  },
});
