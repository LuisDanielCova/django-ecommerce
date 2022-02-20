import React from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { OrderTable } from "../components/orders/OrderTable";
import { AccountDetails } from "../components/user/AccountDetails";

export const UserAccount = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AccountDetails />
      <OrderTable />
      <Footer></Footer>
    </div>
  );
};
