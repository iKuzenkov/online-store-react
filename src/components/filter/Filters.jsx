import React from "react";

function Filters({ category, setCategory, priceRange, setPriceRange }) {
  return (
    <aside className="filters">
      <h3>Filters</h3>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
        </select>
      </label>

      <label>
        Max Price:
        <input
          type="number"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
      </label>
    </aside>
  );
}

export default Filters;
