import React from "react";
import { CategoryList } from "../components/categories/CategoryList";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const Categories = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CategoryList></CategoryList>
      <Footer></Footer>
    </div>
  );
};
