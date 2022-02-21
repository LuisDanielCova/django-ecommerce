import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "./SingleProduct";

export const NewProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(
        `https://the-wardrobe-server.herokuapp.com/api/v1/new-products/`
      );
      setProducts(response.data);
    };

    getList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 className="display-5 text-center fw-normal">New Products</h2>
        {products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
