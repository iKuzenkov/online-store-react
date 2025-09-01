import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../features/cart/CartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <div>
        <h2>Home Page</h2>
        <button
          onClick={() =>
            dispatch(addToCart({ id: Date.now(), name: "Test product" }))
          }
        >
          Add product
        </button>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
