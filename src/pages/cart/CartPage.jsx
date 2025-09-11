import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/CartSlice";
import "./CartPage.scss";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item__info">
                <h2>{item.name}</h2>
                <p>Price: {item.price}$</p>
                <p>Total: {item.price * item.quantity}$</p>
              </div>
              <div className="cart-item__controls">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2 className="cart-total">Total: {totalPrice}$</h2>
    </main>
  );
}

export default CartPage;
