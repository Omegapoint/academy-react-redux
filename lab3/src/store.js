import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "./features/background/backgroundSlice";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    background: backgroundReducer,
    users: userReducer,
  },
});

export default store;
