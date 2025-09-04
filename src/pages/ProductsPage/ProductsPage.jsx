import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import "./ProductsPage.scss";

function ProductsPage() {
  const products = useSelector((state) => state.products.items);
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
