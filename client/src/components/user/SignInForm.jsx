import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../../App";
import { ErrorList } from "../errors/ErrorList";
import { Loading } from "../layout/Loading";

export const SignInForm = () => {
  const { setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    errors: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setUser({ ...user, errors: [] });

    if (user.username === "") {
      setUser((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert an username"),
      }));
    }

    if (user.password === "") {
      setUser((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert a password"),
      }));
    }

    if (user.errors.length === 0) {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const formData = {
        username: user.username,
        password: user.password,
      };

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/token/login/`,
          formData
        );

        if (response.status === 200) {
          const responseToken = response.data.auth_token;

          setToken(responseToken);

          axios.defaults.headers.common[
            "Authorization"
          ] = `Token ${responseToken}`;

          localStorage.setItem("token", responseToken);

          navigate("/");
        }
      } catch (err) {
        if (err.response) {
          for (const property in err.response.data) {
            setUser((previousData) => ({
              ...previousData,
              errors: previousData.errors.concat(
                `${property}: ${err.response.data[property]}`
              ),
            }));
          }
        } else {
          setUser((previousData) => ({
            ...previousData,
            errors: previousData.errors.concat(
              "There was an error. Please try again"
            ),
          }));
          console.log(err.data);
        }
      }
    }

    setIsLoading(false);
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
              value={user.username}
              onChange={(e) => {
                const { value } = e.target;
                setUser({ ...user, username: value });
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
              value={user.password}
              onChange={(e) => {
                const { value } = e.target;
                setUser({ ...user, password: value });
              }}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        {/* Loading Message */}
        <Loading isLoading={isLoading} />

        {/* Error messages */}
        <ErrorList errors={user.errors} />

        {/* Submit Button */}
        <div className="container-fluid text-center my-2">
          <input
            type="submit"
            value="Sign In"
            className="btn btn-warning btn-lg"
            disabled={isLoading ? true : false}
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
