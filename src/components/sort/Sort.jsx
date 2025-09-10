import React from "react";

function Sort({ value, onChange }) {
  return (
    <div className="sort">
      <label>
        Sort by:
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
    </div>
  );
}

export default Sort;
