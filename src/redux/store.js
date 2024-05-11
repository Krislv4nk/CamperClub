import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./camperSlice.js";


export const store = configureStore({
   
  reducer: {
    campers: campersReducer,
  },
});