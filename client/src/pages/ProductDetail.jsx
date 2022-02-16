import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { ProductDetails } from "../components/products/ProductDetails";
import { Footer } from "../components/layout/Footer";

export const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
};
