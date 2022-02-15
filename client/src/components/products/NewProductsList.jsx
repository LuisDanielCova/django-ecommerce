import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const NewProductsList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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
    <div className="container">
      <div className="row">
        <p className="lead fs-2 fw-bold">New Products</p>
        {products.map((product) => {
          return (
            <div className="col-xl-3 my-2" key={product.id}>
              <img
                className="img-thumbnail"
                src={product.get_thumbnail}
                alt=""
              />
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
                      navigate(`/products${product.get_absolute_url}`);
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
    </div>
  );
};
