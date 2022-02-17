import React from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { SignInForm } from "../components/user/SignInForm";

export const LogIn = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SignInForm></SignInForm>
      <Footer></Footer>
    </div>
  );
};
