import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const AccountDetails = () => {
  const navigate = useNavigate();

  const logout = () => {
    axios.defaults.headers.common["Authorization"] = "";

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");

    navigate("/");
  };

  return (
    <div className="container card my-5">
      <h1 className="display-5 mt-2">My account</h1>
      <hr />
      <button className="btn btn-warning col-1 my-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
