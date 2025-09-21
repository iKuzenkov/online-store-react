import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/cartSlice";
import productsReducer from "../../features/products/productsSlice";
import authReducer from "../../features/auth/authSlice";
import adminSliceReducer from "../../features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    admin: adminSliceReducer,
  },
});
