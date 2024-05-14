import React from "react";

function CategoryFilter({ categories, onFilter }) {
  const handleClick = (selectedCategory) => {
    onFilter(selectedCategory);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
