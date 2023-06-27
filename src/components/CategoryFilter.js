import React from "react";

const CategoryFilter = ({ selectedCategory, handleCategoryFilter, categories }) => {
  return (
    <div className="category-filter">
      <span>Filtrar por categoría:</span>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryFilter(e.target.value)}
      >
        <option value="">Todas</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
