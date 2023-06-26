import { createReducer } from "@reduxjs/toolkit";
import {
  INIT_APP,
  GET_EVENT_REQUEST_ERROR,
  GET_EVENT_REQUEST,
  GET_EVENT_REQUEST_SUCCESS,
  DELETE_EVENT_REQUEST_ERROR,
  DELETE_EVENT_REQUEST_SUCCESS,
} from "../actions";

const initialState = {
  isLoading: false,
  events: null,
  error: null,
};

export const EventReducer = createReducer(initialState, {
  GET_EVENT_REQUEST: (state, action) => {
    return { ...state, isLoading: true };
  },
  GET_EVENT_REQUEST_SUCCESS: (state, action) => {
    return { ...state, isLoading: false, events: action.payload };
  },
  GET_EVENT_REQUEST_ERROR: (state, action) => {
    return { ...state, isLoading: false, error: action.payload };
  },
  DELETE_EVENT_REQUEST_SUCCESS: (state, action) => {
    return {
      ...state,
      isLoading: false,
      events: state.events.filter((el) => el._id != action.payload),
    };
  },
});
