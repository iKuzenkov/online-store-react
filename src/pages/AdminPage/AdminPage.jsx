import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products/productsSlice";
import { Navigate } from "react-router-dom";
import "./AdminPage.scss";

function AdminPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  if (!user || user.email !== "admin@example.com") {
    return <Navigate to="/" />;
  }

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      category,
      image: image,
    };

    dispatch(addProduct(newProduct));

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  return (
    <main className="admin-page">
      <div className="admin-panel">
        <h1>Admin Panel</h1>
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:{" "}
            <input
              type="number"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Category:{" "}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
            </select>
          </label>
          <label>
            Image:{" "}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          {image && (
            <div className="preview">
              <p style={{ color: "red", fontSize: "0.85rem" }}>Preview:</p>
              <img src={image} alt="preview" />
            </div>
          )}
          <button type="submit">Add product</button>
        </form>
      </div>
    </main>
  );
}

export default AdminPage;
