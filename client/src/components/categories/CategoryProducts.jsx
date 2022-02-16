import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../products/SingleProduct";

export const CategoryProducts = () => {
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");

  const { category_slug } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/categories/${category_slug}`
      );
      setCategory(response.data);
    };

    getCategory();
  }, []);

  useEffect(() => {
    if (category !== undefined && !(category.products.length > 0)) {
      setMessage("There are no products in this category");
    }
  }, [category]);

  return (
    <div className="container my-5">
      <h1 className="display-5">{category && category.name} Products</h1>
      <hr />
      {category &&
        category.products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      <p className="lead">{message}</p>
    </div>
  );
};
