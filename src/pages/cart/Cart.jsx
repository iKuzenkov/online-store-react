import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
} from "../../features/cart/CartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <>
      <div>
        <h2>Cart</h2>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} — {item.price}$ × {item.quantity}
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
          <h3>
            Total:{" "}
            {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}$
          </h3>
        </ul>
      </div>
    </>
  );
}

export default Cart;
