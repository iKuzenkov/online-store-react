import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart/CartSlice";
import productsReducer from "../../features/products/ProductsSlice";
import authReducer from "../../features/auth/AuthSlice";
import adminSliceReducer from "../../features/admin/adminSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    admin: adminSliceReducer,
  },
});
