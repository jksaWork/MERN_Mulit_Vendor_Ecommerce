import { createReducer } from "@reduxjs/toolkit";
import { INIT_APP } from "../actions";

const initialState = {
  token: null,
  user: {},
  isAuthenticated: null,
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
  INIT_APP: (state, action) => {
    const user = JSON.parse(localStorage.getItem("userdata"));
    if (user) {
      const { token, user } = user;
      console.log(token, user, "Init App");
      return { ...state, token, user };
    }
    return { ...state, token: null, user: null };
  },

  USER_LOG_OUT: (state, action) => {
    localStorage.removeItem("userdata");
    console.log("local Cleard");
    return { ...state, token: null, user: null, isAuthenticated: false };
  },
});
