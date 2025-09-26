import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../../features/cart-slice/cart-slice";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  return (
    <>
      <article className="product-card">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <h2>{product.name}</h2>
        <p>Price: {product.price}$</p>
        <p>Caregory: {product.category}</p>
        {!cartItem ? (
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        ) : (
          <div>
            <button onClick={() => dispatch(decreaseQuantity(product.id))}>
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => dispatch(addToCart(product))}>+</button>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              Remove
            </button>
          </div>
        )}
      </article>
    </>
  );
}

export default ProductCard;
