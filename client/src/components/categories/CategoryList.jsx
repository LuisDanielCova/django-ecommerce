import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../layout/Loading";
import { CategoryListItem } from "./CategoryListItem";

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/categories/`
      );
      setCategories(response.data);
      setIsLoading(false);
    };

    getCategories();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-4">Category List</h1>
      <hr className="featurette-divider" />
      <Loading isLoading={isLoading} />
      <ul className="list-group list-group-flush col-4">
        {categories &&
          categories.map((category) => {
            return <CategoryListItem category={category} key={category.id} />;
          })}
      </ul>
    </div>
  );
};
