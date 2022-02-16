import React from "react";
import { CartTable } from "../components/cart/CartTable";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

export const Cart = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CartTable></CartTable>
      <Footer></Footer>
    </div>
  );
};
