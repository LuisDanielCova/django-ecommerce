import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <ul className="">
        {categories &&
          categories.map((category) => {
            return (
              <li className="lead fs-4">
                <a className="text-dark" href={`category/${category.name}`}>
                  {category.name}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
