import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  Children,
} from "react";
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

  // const stripeTokenHandler = async (token) => {
  //   const items = [];

  //   for (let i = 0; i < cart.items.length; i++) {
  //     const item = cart.items[i];
  //     const obj = {
  //       product: item.product.id,
  //       quantity: item.quantity,
  //       price: item.product.price * item.quantity,
  //     };

  //     items.push(obj);
  //   }

  //   const newData = {
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     email: data.email,
  //     phone: data.phone,
  //     address: data.address,
  //     zipcode: data.zipcode,
  //     place: data.place,
  //     items: items,
  //     stripe_token: token.id,
  //   };

  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/v1/checkout/",
  //       newData
  //     );

  //     if (response.status === 201) {
  //       const clearCart = { items: [] };

  //       setCart(clearCart);
  //       localStorage.setItem("cart", JSON.stringify(clearCart));

  //       navigate("/cart/success");
  //     }
  //   } catch (err) {
  //     setData((previousData) => ({
  //       ...previousData,
  //       errors: previousData.errors.concat(
  //         "Something went wrong, please try again."
  //       ),
  //     }));

  //     console.log(err);
  //   }
  // };

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

          <StripeComponent data={data} setData={setData} ref={stripeRef} />

          {data.errors.length !== 0 && (
            <div className="container-fluid alert alert-danger pb-0 my-2">
              <ul className="">
                {data.errors.map((error, key) => {
                  return <li key={key}>{error}</li>;
                })}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
