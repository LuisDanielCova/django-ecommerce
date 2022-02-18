import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { CartTable } from "../components/cart/CartTable";
import { CheckoutForm } from "../components/checkout/CheckoutForm";

export const Checkout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CartTable title={"Checkout"} isCheckout={true}></CartTable>
      <CheckoutForm></CheckoutForm>
      <Footer></Footer>
    </div>
  );
};
