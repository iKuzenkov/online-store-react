import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../features/products/ProductsSlice";
import ProductCard from "../../components/productCard/ProductCard";
import "./ProductsPage.scss";

function ProductsPage() {
  const products = useSelector(selectProducts);
  return (
    <>
      <main className="product-page">
        <h1>Products</h1>
        <div className="products-grid">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ProductsPage;
