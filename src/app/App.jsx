import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home-page/Home";
import ProductsPage from "../pages/products-page/ProductsPage";
import ProductDetails from "../pages/product-details-page/ProductDetails";
import LoginPage from "../pages/login-page/LoginPage";
import RegisterPage from "../pages/register-page/RegisterPage";
import Auth from "../pages/auth-page/Auth";
import PrivateRoute from "../components/private-route/PrivateRoute";
import AdminPage from "../pages/admin-page/AdminPage";
import Cart from "../pages/cart-page/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route
            path="cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
