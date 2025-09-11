import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <h1>Welcome to Our Store</h1>
      <p>Find the best products at the best prices.</p>
      <Link to="/products" className="home_cta">
        Browse Products
      </Link>
    </main>
  );
}

export default Home;
