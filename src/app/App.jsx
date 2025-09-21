import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Auth from "../pages/Auth/Auth";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminPage from "../pages/AdminPage/AdminPage";
import Cart from "../pages/Cart/CartPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetails />} />
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
