import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../layout/Loading";
import { SingleProduct } from "../products/SingleProduct";

export const SearchResult = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setQuery(location.search.slice(7));
  }, [location]);

  useEffect(() => {
    const getResults = async () => {
      setIsLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/products/search/`,
        { query: query }
      );
      if (response.data.length > 0) {
        setProducts(response.data);
      } else {
        setMessage("There are no products with that name");
      }
      setIsLoading(false);
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
        <Loading isLoading={isLoading} />
        {products &&
          products.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
        <p className="lead">{message}</p>
      </div>
    </div>
  );
};
