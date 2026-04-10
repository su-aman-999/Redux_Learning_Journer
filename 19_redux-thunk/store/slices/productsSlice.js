import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Someting went wronge!";
    },
    loadAllProducts: (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export default slice.reducer;

//Selector
export const getAllProducts = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;

export const fetchProductsData = () => (dispatch) => {
  console.log("a");

  dispatch(fetchProducts());
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch(loadAllProducts(data.products));
    })
    .catch((err) => {
      dispatch(fetchProductsError(err));
    });
};

//! action type
export const { loadAllProducts, fetchProducts, fetchProductsError } =
  slice.actions;
