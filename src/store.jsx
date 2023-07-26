import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
