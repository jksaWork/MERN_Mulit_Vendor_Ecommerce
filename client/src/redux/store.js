import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";
import { ShopReducer } from "./reducers/ShopReducer";
export const store = configureStore({
  reducer: {
    shop: ShopReducer,
    usersReducer,
  },
});
