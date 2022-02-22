import React from "react";

export const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="d-flex row justify-content-center my-3">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <strong className="text-center text-warning">Loading...</strong>
      </div>
    )
  );
};
