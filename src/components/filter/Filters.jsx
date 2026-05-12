import React from "react";

function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <label>
        Category:
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="clothes">Clothes</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
