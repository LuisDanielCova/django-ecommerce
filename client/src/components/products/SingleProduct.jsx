import React from "react";
import { useNavigate } from "react-router-dom";

export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="col-xl-3 my-2" key={product.id}>
      <img className="img-thumbnail" src={product.get_thumbnail} alt="" />
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
};
