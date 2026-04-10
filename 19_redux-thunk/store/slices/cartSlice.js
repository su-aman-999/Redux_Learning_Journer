//! createSlice
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
//Find Index Function
const findItemIndex = (state, action) =>
  state.findIndex((item) => item.id === action.payload.id);

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },

  reducers: {
    fetchCartItems(state) {
      state.loading = true;
    },
    fetchCartItemsError(state) {
      state.loading = false;
      state.error = action.payload || "Something went wornge!";
    },

    loadCartItems(state, action) {
      state.loading = false;

      state.list = action.payload;
      state.error = "";
    },

    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },

    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },

    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },

    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (state[existingItemIndex].quantity > 1) {
        state.list[existingItemIndex].quantity -= 1;
      } else {
        state.list.splice(existingItemIndex, 1);
      }
    },
  },
});

//! Action Creator
export const {
  fetchCartItems,
  loadCartItems,
  fetchCartItemsError,
  addCartItem,
  removeCartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} = slice.actions;

//!Thunks Action Create
export const fetchCartItemsData = () => (dispatch, getState) => {
  dispatch(fetchCartItems());
  fetch("https://dummyjson.com/carts/15")
    .then((res) => res.json())
    .then((data) => {
      dispatch(loadCartItems(data.products));
    })
    .catch((err) => {
      dispatch(fetchCartItemsError(err));
    });
};

//! Reucers
export default slice.reducer;

//! Selectors
export const getCartLoadingState = (state) => state.cartItems.loading;
export const getCartError = (state) => state.cartItems.error;

//? use createSelector() use reselect library
export const getCartItems = ({ products, cartItems }) => {
  return cartItems.list
    .map(({ id, quantity }) => {
      const cartItem = products.list.find((product) => product.id === id);
      return { ...cartItem, quantity };
    })
    .filter(({ title }) => title);
};

//! Action Creator for api dispatch
export const getAllCartItems = createSelector(getCartItems, (state) => state);
