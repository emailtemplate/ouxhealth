import { configureStore } from "@reduxjs/toolkit";
import hospitalReducer from "./slice";

export const store = configureStore({
  reducer: {
    hospital: hospitalReducer,
  },
});
