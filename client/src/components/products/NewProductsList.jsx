import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "./SingleProduct";
import { Loading } from "../layout/Loading";

export const NewProductsList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/new-products/`
      );
      setProducts(response.data);
      setIsLoading(false);
    };

    getList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="display-5 text-center fw-normal">New Products</h2>
        <hr />
        <Loading isLoading={isLoading} />
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
