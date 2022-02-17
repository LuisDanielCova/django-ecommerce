import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";

export const Navbar = () => {
  const [productsInCart, setProductsInCart] = useState(0);
  const [search, setSearch] = useState("");
  const { cart } = useContext(CartContext);
  const nagivate = useNavigate();

  const searchQuery = (query) => {
    if (query !== "") {
      nagivate(`/search?query=${query}`);
    }
  };

  useEffect(() => {
    if (cart.items.length > 0) {
      setProductsInCart(cart.items.length);
    }
  }, [cart.items]);

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
                The Wardrobe
              </a>
            </li>
            <li>
              <a href="/categories" className="nav-link px-2 text-white">
                Categories
              </a>
            </li>
          </ul>
          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <div className="input-group ">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
                name="query"
                value={search}
                onChange={(e) => {
                  const { value } = e.target;
                  setSearch(value);
                }}
              />
              <button
                className="btn btn-warning"
                onClick={() => {
                  searchQuery(search);
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="text-end">
            <a className="btn btn-outline-light me-2" href="/login">
              Sign in
            </a>
            <a className="btn btn-warning" href={`/cart`}>
              <i className="bi bi-cart"></i> Cart ({productsInCart})
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
