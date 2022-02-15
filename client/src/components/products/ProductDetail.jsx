import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/products/winter/heavy-winter-jacket/`
      );
      setProduct(response.data);
    };
    getProduct();
  }, []);

  return (
    <div className="container">
      {" "}
      {product && (
        <div className="row">
          <div className="col-6">
            <p className="fs-1">{product.name}</p>
            <img
              src={product.get_image}
              className="img-thumbnail"
              width={400}
            />
            <p className="fs-4 my-1">Product Description:</p>
            <p className="lead">{product.description}</p>
          </div>
          <div className="col">
            <p className="fs-1">Information</p>
            <p>
              Price: <strong>${product.price}</strong>
            </p>
            <div className="input-group mb-3 w-50">
              <input
                type="number"
                className="form-control"
                placeholder="1"
                min={1}
              />
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon1"
              >
                <i className="bi bi-cart"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};
