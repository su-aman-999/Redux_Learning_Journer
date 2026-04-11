import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//! createAsyncThunk
export const fetchProductsData = createAsyncThunk(
  "products/fetchProductItems",
  async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      return await data.products;
    } catch (err) {
      throw err;
    }
  },
);

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.error = "";
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong!";
      });
  },
});

export default slice.reducer;

//Selector
export const getAllProducts = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;
