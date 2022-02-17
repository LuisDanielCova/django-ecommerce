import React from "react";
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container my-5">
      <h1 className="display-5 text-center">Sign In</h1>
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
            />
            <label htmlFor="username">Username</label>
          </div>
          {/* Password Input */}
          <div className="form-floating">
            <input
              type="text"
              name="password"
              className="form-control rounded-0"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="container-fluid text-center my-2">
          <input
            type="submit"
            value="Sign In"
            className="btn btn-warning btn-lg"
          />
        </div>
      </form>

      <p className="lead text-center">
        Don't have an account?{" "}
        <Link className="text-dark" to={"/signup"}>
          Sign up!
        </Link>
      </p>
    </div>
  );
};
