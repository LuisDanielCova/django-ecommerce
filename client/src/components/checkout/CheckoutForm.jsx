import React, { useState, useRef } from "react";
import { ErrorList } from "../errors/ErrorList";
import { StripeComponent } from "./StripeComponent";

export const CheckoutForm = () => {
  const stripeRef = useRef();

  const [data, setData] = useState({
    cart: {
      items: [],
    },
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    place: "",
    errors: [],
  });

  return (
    <div className="container my-5">
      <h2 className="display-5">Shipping Details</h2>
      <p className="lead text-muted">*All fields are required</p>
      <div className="container-fluid card p-3">
        <form
          className="row g-3"
          onSubmit={(e) => {
            stripeRef.current.handleSubmit(e);
          }}
        >
          {/* First Name Input */}
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
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
          {/* Last Name Input */}
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
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
          {/* Email Input */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
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
          {/* Phone Input */}
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
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
          {/* Address Input */}
          <div className="col-md-6">
            <label htmlFor="address" className="form-label">
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
          {/* Place Input */}
          <div className="col-md-4">
            <label htmlFor="place" className="form-label">
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
          {/* Zipcode Input */}
          <div className="col-md-2">
            <label htmlFor="zipCode" className="form-label">
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

          {/* Stipe payment */}
          <StripeComponent data={data} setData={setData} ref={stripeRef} />

          {/* Error messages */}
          <ErrorList errors={data.errors} />
        </form>
      </div>
    </div>
  );
};
