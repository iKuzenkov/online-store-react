import React from "react";
import "./ProductCard.scss";

function ProductCard({ product }) {
  return (
    <>
      <article className="product-card">
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
        />
        <h2>{product.name}</h2>
        <p>Price: {product.price}$</p>
        <p>Category: {product.category}</p>
        <button>Add to Cart</button>
      </article>
    </>
  );
}

export default ProductCard;
