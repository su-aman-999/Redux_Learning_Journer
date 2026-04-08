import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { todoSlice } from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
