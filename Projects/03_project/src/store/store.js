import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cartItems: cartItemReducer,
  },
});


export default store;
