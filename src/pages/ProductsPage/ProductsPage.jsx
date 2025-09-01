import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/products";
import "./ProductsPage.scss";

function ProductsPage() {
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
