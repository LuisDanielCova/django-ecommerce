import React from "react";

export const CategoryListItem = ({ category }) => {
  return (
    <li className="lead fs-4 list-group-item d-flex justify-content-between align-items-center">
      <a className="text-dark" href={`categories${category.get_absolute_url}`}>
        {category.name}
      </a>
      <span className="badge bg-dark rounded-pill">
        {category.products.length}
      </span>
    </li>
  );
};
