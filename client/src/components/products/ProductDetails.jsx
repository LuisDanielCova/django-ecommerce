import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../App";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const { category_slug, product_slug } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/products/${category_slug}/${product_slug}/`
      );
      setProduct(response.data);
    };
    getProduct();
  }, [category_slug, product_slug]);

  const addToCart = (product, quantity) => {
    const alreadyInCart = cart.items.filter(
      (item) => item.product.id === product.id
    );

    if (alreadyInCart.length > 0) {
      alreadyInCart[0].quantity =
        parseInt(alreadyInCart[0].quantity) + parseInt(quantity);
    } else {
      const item = {
        product,
        quantity,
      };

      cart.items.push(item);
      setCart(cart);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate(0);
  };

  return (
    <div className="container">
      {" "}
      {product && (
        <div className="row">
          <div className="col-6">
            <p className="fs-1">{product.name}</p>
            <img
              src={`https://the-wardrobe-server.herokuapp.com${product.get_image}`}
              className="img-thumbnail"
              width={400}
              alt=""
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
                value={quantity}
                onChange={(e) => {
                  const { value } = e.target;
                  setQuantity(value);
                }}
              />
              <button
                className="btn btn-warning"
                type="button"
                id="button-addon1"
                onClick={() => {
                  addToCart(product, quantity);
                }}
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
