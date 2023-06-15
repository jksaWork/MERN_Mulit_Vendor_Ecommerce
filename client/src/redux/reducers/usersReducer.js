import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: {},
};
export const usersReducer = createReducer(initialState, {
  storeuseruata: (state, action) => {
    console.log(action);
    console.log("userdata - ------", action);
    state.token = action.payload.token;
    state.user = action.payload.user;
    localStorage.setItem(
      "userdata",
      JSON.stringify({
        token: action.payload.token,
        user: action.payload.user,
      })
    );

    return state;
  },
  decrement: (state, action) => state - action.payload,
});
