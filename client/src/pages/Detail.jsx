import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { ProductDetail } from "../components/products/ProductDetail";
import { Footer } from "../components/layout/Footer";

export const Detail = () => {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Footer />
    </div>
  );
};
