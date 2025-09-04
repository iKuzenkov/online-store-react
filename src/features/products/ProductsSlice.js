// import { createSlice } from "@reduxjs/toolkit";
// import { products as initialProducts } from "../../data/products";

// const initialState = {
//   items: initialProducts,
//   loading: false,
//   error: null,
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeProduct: (state, action) => {
//       state.items = state.items.filter((p) => p.id !== action.payload);
//     },
//     clearProducts: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addProduct, removeProduct, clearProducts } =
//   productsSlice.actions;
// export const selectProducts = (state) => state.products.items;
// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "BookReact",
      price: 25,
      category: "books",
      image: "/images/test.jpg",
    },
    {
      id: 2,
      name: "Headphones",
      price: 25,
      category: "Electronics",
      image: "/images/test.jpg",
    },
    {
      id: 3,
      name: "T-shirt JS",
      price: 25,
      category: "Clothes",
      image: "/images/test.jpg",
    },
    {
      id: 4,
      name: "Laptop",
      price: 25,
      category: "Electronics",
      image: "/images/test.jpg",
    },
    {
      id: 5,
      name: "Sneakers",
      price: 25,
      category: "Clothes",
      image: "/images/test.jpg",
    },
    {
      id: 6,
      name: "Keyboard",
      price: 25,
      category: "Electronics",
      image: "/images/test.jpg",
    },
  ],
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
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
