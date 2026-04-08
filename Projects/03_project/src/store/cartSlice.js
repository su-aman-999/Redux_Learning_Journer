import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      state.splice(index, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addCartItem, removeCartItem } = cartSlice.actions;
