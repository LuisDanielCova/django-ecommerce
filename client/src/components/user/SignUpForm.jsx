import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    errors: ["test"],
  });

  const handleSubmit = (e) => {
    setNewUser({ ...newUser, errors: [] });

    e.preventDefault();
  };

  return (
    <div className="container my-5">
      <h1 className="display-5 text-center">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "330px",
          width: "100%",
          margin: "auto",
          padding: "15px",
        }}
      >
        <div className="container-fluid">
          {/* Username Input */}
          <div className="form-floating">
            <input
              type="text"
              name="username"
              className="form-control rounded-0"
              placeholder="Username"
              style={{ marginBottom: "-1px" }}
              value={newUser.username}
              onChange={(e) => {
                const { value } = e.target;
                setNewUser({ ...newUser, username: value });
              }}
            />
            <label htmlFor="username">Username</label>
          </div>
          {/* Password Input */}
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control rounded-0"
              placeholder="Password"
              style={{ marginBottom: "-1px" }}
              value={newUser.password}
              onChange={(e) => {
                const { value } = e.target;
                setNewUser({ ...newUser, password: value });
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
          {/* Confirm Password Input */}
          <div className="form-floating">
            <input
              type="password"
              name="confirmPassword"
              className="form-control rounded-0"
              placeholder="Confirm Password"
              value={newUser.confirmPassword}
              onChange={(e) => {
                const { value } = e.target;
                setNewUser({ ...newUser, confirmPassword: value });
              }}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
        </div>
        {/* Error Messages */}
        {newUser.errors.length !== 0 && (
          <div className="container-fluid alert alert-danger pb-0 my-2">
            <ul className="">
              {newUser.errors.map((error, key) => {
                return <li key={key}>{error}</li>;
              })}
            </ul>
          </div>
        )}
        <div className="container-fluid text-center my-2">
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-warning btn-lg"
          />
        </div>
      </form>

      <p className="lead text-center">
        Already have an account?{" "}
        <Link className="text-dark" to={"/login"}>
          Login!
        </Link>
      </p>
    </div>
  );
};
