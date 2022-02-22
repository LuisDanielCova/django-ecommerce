import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../layout/Loading";
import { SingleProduct } from "../products/SingleProduct";

export const CategoryProducts = () => {
  const [category, setCategory] = useState();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { category_slug } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/categories/${category_slug}`
      );
      setCategory(response.data);
      setIsLoading(false);
    };

    getCategory();
    // eslint-disable-next-line
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
      <Loading isLoading={isLoading} />
      <div className="row">
        {category &&
          category.products.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
      </div>
      <p className="lead">{message}</p>
    </div>
  );
};
