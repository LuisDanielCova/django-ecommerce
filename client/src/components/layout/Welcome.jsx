import React from "react";
import WelcomeImage from "./images/WelcomeImage.jpg";

export const Welcome = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark row">
      <div className="col-md-5 p-lg-5 mx-auto my-5 text-light">
        <h1 className="display-3 fw-normal">Welcome to The Wardrobe!</h1>
        <p className="lead fw-normal">
          This is a clothing store made using the Django REST Framework
        </p>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          className="d-block my-auto mx-lg-auto img-fluid rounded-3"
          src={WelcomeImage}
          alt="Model wearing a black jacket"
        />
      </div>
    </div>
  );
};
