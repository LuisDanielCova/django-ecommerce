import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SingleProduct } from "../products/SingleProduct";

export const SearchResult = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const location = useLocation();

  useEffect(() => {
    setQuery(location.search.slice(7));
  }, [location]);

  useEffect(() => {
    const getResults = async () => {
      const response = await axios.post(
        `https://the-wardrobe-server.herokuapp.com/api/v1/products/search/`,
        { query: query }
      );
      if (response.data.length > 0) {
        setProducts(response.data);
      } else {
        setMessage("There are no products with that name");
      }
    };

    if (query !== "") {
      setProducts([]);
      setMessage([]);
      getResults();
    }
  }, [query]);

  return (
    <div className="container my-5">
      <div className="row">
        <h2 className="display-5 text-center fw-normal">Search Results</h2>
        <hr />
        {products &&
          products.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
        <p className="lead">{message}</p>
      </div>
    </div>
  );
};
