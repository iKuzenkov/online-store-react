import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductDetails from "../pages/productDetails/ProductDetails";
import LoginPage from "../pages/login-page/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import Auth from "../pages/auth/Auth";
import PrivateRoute from "../components/private-route/PrivateRoute";
import AdminPage from "../pages/admin/AdminPage";
import Catalog from "../pages/Catalog";
import Cart from "../pages/cart/CartPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="auth" element={<Auth />} />
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
      </Router>
    </>
  );
}

export default App;
