import { createSlice } from "@reduxjs/toolkit";
import { products as initialProducts } from "../../data/products";

const initialState = {
  items: initialProducts,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearProducts: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, clearProducts } =
  productsSlice.actions;
export const selectProducts = (state) => state.products.items;
export default productsSlice.reducer;
