import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </article>
    </>
  );
}

export default ProductCard;
