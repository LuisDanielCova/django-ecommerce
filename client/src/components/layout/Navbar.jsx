import React, { useContext } from "react";
import { CartContext } from "../../App";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <i className="bi bi-shop"></i>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Ecommerce
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Summer
              </a>
            </li>
            <li>
              <a href="/" className="nav-link px-2 text-white">
                Winter
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Log in
            </button>
            <button type="button" className="btn btn-warning">
              <i className="bi bi-cart"></i> Cart ({cart.items.length})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
