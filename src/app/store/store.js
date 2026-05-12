import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../features/cart-slice/cart-slice";
import productsReducer from "../../features/products-slice/products-slice";
import authReducer from "../../features/auth-slice/auth-slice";
import adminReducer from "../../features/admin-slice/admin-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
    admin: adminReducer,
  },
});
