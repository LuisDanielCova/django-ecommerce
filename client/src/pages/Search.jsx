import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { SearchResult } from "../components/products/SearchResult";
import { Footer } from "../components/layout/Footer";

export const Search = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SearchResult></SearchResult>
      <Footer></Footer>
    </div>
  );
};
