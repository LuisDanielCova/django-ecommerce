import React, { useState } from "react";

export const CheckoutForm = () => {
  const [data, setData] = useState({
    cart: {
      items: [],
    },
    stripe: {},
    card: {},
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    place: "",
    errors: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({ ...data, errors: [] });

    if (data.first_name === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your First Name"),
      }));
    }

    if (data.last_name === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your Last Name"),
      }));
    }

    if (data.email === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your email"),
      }));
    }

    if (data.phone === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your phone number"),
      }));
    }

    if (data.address === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your address"),
      }));
    }

    if (data.zipcode === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your zipcode"),
      }));
    }

    if (data.place === "") {
      setData((previousData) => ({
        ...previousData,
        errors: previousData.errors.concat("Please insert your place"),
      }));
    }
  };
  return (
    <div className="container my-5">
      <h2 className="display-5">Shipping Details</h2>
      <p className="lead text-muted">*All fields are required</p>
      <div className="container-fluid card p-3">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="John"
              value={data.first_name}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, first_name: value });
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Smith"
              value={data.last_name}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, last_name: value });
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@gmail.com"
              value={data.email}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, email: value });
              }}
            />
          </div>

          <div className="col-md-6">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+584169861942"
              value={data.phone}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, phone: value });
              }}
            />
          </div>

          <div className="col-md-6">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              value={data.address}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, address: value });
              }}
            />
          </div>
          <div className="col-md-4">
            <label for="place" className="form-label">
              Place
            </label>
            <input
              type="text"
              className="form-control"
              id="place"
              placeholder=""
              value={data.place}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, place: value });
              }}
            />
          </div>

          <div className="col-md-2">
            <label for="zipCode" className="form-label">
              Zip code
            </label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              placeholder="33010"
              value={data.zipcode}
              onChange={(e) => {
                const { value } = e.target;
                setData({ ...data, zipcode: value });
              }}
            />
          </div>

          {data.errors.length !== 0 && (
            <div className="container-fluid alert alert-danger pb-0 my-2">
              <ul className="">
                {data.errors.map((error, key) => {
                  return <li key={key}>{error}</li>;
                })}
              </ul>
            </div>
          )}

          <div className="col-12">
            <button type="submit" className="btn btn-warning">
              Pay with Stripe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
