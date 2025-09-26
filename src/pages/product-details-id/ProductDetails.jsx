import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cart-slice/cart-slice";

function ProductsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main className="product-details">
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "18.75rem", marginBottom: "1.5rem" }}
      />
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description || "No description yet."}</p>
      <Link to="/products">
        <button>Back to Products</button>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </main>
  );
}

export default ProductsDetails;
