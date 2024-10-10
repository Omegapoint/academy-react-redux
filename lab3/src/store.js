import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "./features/background/backgroundSlice";
import userReducer from "./features/users/usersSlice";
import avatarReducer from "./features/avatar/avatarSlice";

const store = configureStore({
  reducer: {
    background: backgroundReducer,
    users: userReducer,
    avatar: avatarReducer,
  },
});

export default store;
