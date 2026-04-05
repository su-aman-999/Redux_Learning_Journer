import { createStore, combineReducers } from "redux";

import reducerCart from "./slices/cartSlice";
import reducerProducts from "./slices/productsSlice";
import reducerWishList from "./slices/wishListSlice";

//? We know that store is an object and all the keys in the store will be called slices.

//! 1. product slice
//! 2. cartItems sice
//! 3. wishList slice

const reducers = combineReducers({
  products: reducerProducts,
  cartItems: reducerCart,
  wishList: reducerWishList,
});

//? __REDUX_DEVTOOLS_EXTENSION__?.() → store enhancer
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);
