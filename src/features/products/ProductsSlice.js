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
      price: 28,
      category: "electronics",
      image: "/images/test.jpg",
    },
    {
      id: 3,
      name: "T-shirt JS",
      price: 29,
      category: "clothes",
      image: "/images/test.jpg",
    },
    {
      id: 4,
      name: "Laptop",
      price: 33,
      category: "electronics",
      image: "/images/test.jpg",
    },
    {
      id: 5,
      name: "Sneakers",
      price: 36,
      category: "clothes",
      image: "/images/test.jpg",
    },
    {
      id: 6,
      name: "Keyboard",
      price: 39,
      category: "electronics",
      image: "/images/test.jpg",
    },
    {
      id: 7,
      name: "Keyboard",
      price: 47,
      category: "electronics",
      image: "/images/test.jpg",
    },
    {
      id: 8,
      name: "Keyboard",
      price: 47,
      category: "electronics",
      image: "/images/test.jpg",
    },
    {
      id: 9,
      name: "Keyboard",
      price: 477,
      category: "electronics",
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
