import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { NewProductsList } from "../components/products/NewProductsList";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <NewProductsList></NewProductsList>
      <Footer></Footer>
    </div>
  );
};
