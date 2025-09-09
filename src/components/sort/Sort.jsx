import React from "react";

function Sort({ sortBy, setSortBy }) {
  return (
    <div className="sort">
      <h3>Sort by</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="defalult">Default</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="name-asc">Name A–Z</option>
        <option value="name-desc">Z–A</option>
      </select>
    </div>
  );
}

export default Sort;
