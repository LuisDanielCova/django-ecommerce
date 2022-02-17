import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthProvider = () => {
  return localStorage.getItem("token") ? <Outlet /> : <Navigate to={"/"} />;
};
