import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { NewProductsList } from "../components/products/NewProductsList";
import { Footer } from "../components/layout/Footer";
import { Welcome } from "../components/layout/Welcome";

export const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <NewProductsList></NewProductsList>
      <Footer></Footer>
    </div>
  );
};
