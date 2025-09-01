import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductsPage/ProductsPage";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
