import React from "react";

export const ErrorList = ({ errors }) => {
  return (
    errors.length > 0 && (
      <div className="container-fluid alert alert-danger pb-0 my-2">
        <ul className="">
          {errors.map((error, key) => {
            return <li key={key}>{error}</li>;
          })}
        </ul>
      </div>
    )
  );
};
