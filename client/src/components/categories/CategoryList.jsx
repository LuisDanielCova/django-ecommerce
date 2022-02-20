import axios from "axios";
import React, { useEffect, useState } from "react";
import { CategoryListItem } from "./CategoryListItem";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/categories/`
      );
      setCategories(response.data);
    };

    getCategories();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-4">Category List</h1>
      <hr className="featurette-divider" />
      <ul className="list-group list-group-flush col-4">
        {categories &&
          categories.map((category) => {
            return <CategoryListItem category={category} key={category.id} />;
          })}
      </ul>
    </div>
  );
};
