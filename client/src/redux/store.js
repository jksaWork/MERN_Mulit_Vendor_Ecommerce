import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./reducers/usersReducer";
export const store = configureStore({
  reducer: { usersReducer },
});
