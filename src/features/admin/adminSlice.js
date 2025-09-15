import { createSlice } from "@reduxjs/toolkit";
import { addProduct, removeProduct } from "../products/ProductsSlice";

const initialState = {
  lastAddedId: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetAdminState: (state) => {
      state.lastAddedId = null;
    },
    extraReducers: (builder) => {
      builder
        .addCase(addProduct, (state, action) => {
          state.lastAddedId = action.payload.id;
        })
        .addCase(removeProduct, (state, action) => {
          state.lastAddedId = null;
        });
    },
  },
});

export const { resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;
