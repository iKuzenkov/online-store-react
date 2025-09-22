import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cartSlice/cartSlice";
import productsReducer from "../../features/productsSlice/productsSlice";
import authReducer from "../../features/authSlice/authSlice";
import adminSliceReducer from "../../features/adminSlice/adminSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    admin: adminSliceReducer,
  },
});
