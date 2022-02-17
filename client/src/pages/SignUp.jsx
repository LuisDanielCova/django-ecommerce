import React from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { SignUpForm } from "../components/user/SignUpForm";

export const SignUp = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SignUpForm></SignUpForm>
      <Footer></Footer>
    </div>
  );
};
