import React from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { AccountDetails } from "../components/user/AccountDetails";

export const UserAccount = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AccountDetails></AccountDetails>
      <Footer></Footer>
    </div>
  );
};
