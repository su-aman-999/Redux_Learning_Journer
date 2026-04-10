import { apiMiddleware } from "./middleware/api";
import { func } from "./middleware/func";
import reducerCart from "./slices/cartSlice";
import reducerProducts from "./slices/productsSlice";
import reducerWishList from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: reducerProducts,
    cartItems: reducerCart,
    wishList: reducerWishList,
  },

  //?Thunks: A piecs of code that does some delayed work.

  middleware: (getDefaultMidlleware) => [
    ...getDefaultMidlleware(),
    apiMiddleware,
  ],
});
