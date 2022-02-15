import React, { useState, useEffect } from "react";
import axios from "axios";

export const NewProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/new-products/`
      );
      setProducts(response.data);
    };

    getList();
  }, []);

  return (
    <div className="row">
      <p className="lead fs-2 fw-bold">New Products</p>
      {products.map((product) => {
        return (
          <div className="col-xl-3 my-2" key={product.id}>
            <img className="img-thumbnail" src={product.get_thumbnail} />
            <p className="lead">
              <strong>{product.name}</strong>
            </p>
            <div className="row">
              <p className="lead muted-text fst-italic col-3 my-1">
                <em>${product.price}</em>
              </p>
              <div className="col-5">
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    console.log(product.get_absolute_url);
                  }}
                >
                  <i className="bi bi-bag"></i> Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
