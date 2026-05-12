import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../features/products-slice/products-slice";
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
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

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

    const numericPrice = Number(price);
    if (numericPrice <= 0 || isNaN(numericPrice)) {
      alert("Price must be greater then 0");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: numericPrice,
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
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              required
              onChange={(e) => {
                const value = e.target.value;
                setName(value);

                setErrors((prev) => ({
                  ...prev,
                  name: value === "" ? "Please, enter name." : "",
                }));
              }}
            />
          </label>
          {errors.name && <div className="error">{errors.name}</div>}
          <label htmlFor="price">
            Price:{" "}
            <input
              type="number"
              min="1"
              name="price"
              id="price"
              value={price}
              required
              onChange={(e) => {
                const value = e.target.value;
                setPrice(value);

                setErrors((prev) => ({
                  ...prev,
                  price: value === "" ? "Please, enter price." : "",
                }));
              }}
            />
          </label>
          {errors.price && <div className="error">{errors.price}</div>}
          <label htmlFor="category">
            Category:{" "}
            <select
              name="category"
              id="category"
              value={category}
              required
              onChange={(e) => {
                const value = e.target.value;
                setCategory(value);

                setErrors((prev) => ({
                  ...prev,
                  category: value === "" ? "Please, choose category" : "",
                }));
              }}
            >
              <option value="">Choose category</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
            </select>
          </label>
          {errors.category && <div className="error">{errors.category}</div>}
          <label htmlFor="image">
            Image:{" "}
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              required
              onChange={handleImageChange}
            />
          </label>
          {image && (
            <div className="preview">
              <p>Preview:</p>
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
