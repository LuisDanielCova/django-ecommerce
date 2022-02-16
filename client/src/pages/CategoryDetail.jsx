import React from "react";
import { CategoryProducts } from "../components/categories/CategoryProducts";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const CategoryDetail = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CategoryProducts></CategoryProducts>
      <Footer></Footer>
    </div>
  );
};
