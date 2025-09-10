import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/productsPage/ProductsPage";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Catalog from "../pages/Catalog";
import Cart from "../pages/cart/Cart";
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
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
