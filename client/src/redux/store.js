import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";
import { ShopReducer } from "./reducers/ShopReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { EventReducer } from "./reducers/EventReducer";
export const store = configureStore({
  reducer: {
    shop: ShopReducer,
    products: ProductReducer,
    events: EventReducer,
    usersReducer,
  },
});
