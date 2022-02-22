import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorList } from "../errors/ErrorList";
import { Loading } from "../layout/Loading";

export const SignUpForm = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    errors: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setNewUser({ ...newUser, errors: [] });

    if (newUser.username === "") {
      setNewUser((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert an username"),
      }));
    }

    if (newUser.password === "") {
      setNewUser((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert a password"),
      }));
    }

    if (newUser.password !== newUser.confirmPassword) {
      setNewUser((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("The passwords don't match"),
      }));
    }

    if (newUser.errors.length === 0) {
      const formData = {
        username: newUser.username,
        password: newUser.password,
      };

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/users/`,
          formData
        );

        if (response.status === 201) {
          alert(`User registered!`);
          navigate("/signin");
        }
      } catch (err) {
        if (err.response) {
          for (const property in err.response.data) {
            setNewUser((previousData) => ({
              ...previousData,
              errors: previousData.errors.concat(
                `${property}: ${err.response.data[property]}`
              ),
            }));
          }
        } else if (err.message) {
          setNewUser((previousData) => ({
            ...previousData,
            errors: previousData.errors.concat(
              `There was an error. Please try again`
            ),
          }));
        }
      }
    }
    setIsLoading(false);
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

        {/* Loading Message */}
        <Loading isLoading={isLoading} />

        {/* Error Messages */}
        <ErrorList errors={newUser.errors} />

        <div className="container-fluid text-center my-2">
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-warning btn-lg"
            disabled={isLoading ? true : false}
          />
        </div>
      </form>

      <p className="lead text-center">
        Already have an account?{" "}
        <Link className="text-dark" to={"/signin"}>
          Login!
        </Link>
      </p>
    </div>
  );
};
