import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { forwardRef, useContext, useImperativeHandle } from "react";
import "./PaymentForm.css";
import { CartContext } from "../../App";
import { useNavigate } from "react-router-dom";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#946f00",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#946f00" },
      "::placeholder": { color: "#946f00" },
    },
    invalid: {
      iconColor: "#6d000f",
      color: "#6d000f",
    },
  },
};

export const PaymentForm = forwardRef(({ data, setData }, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  useImperativeHandle(ref, () => ({
    async handleSubmit(e) {
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

      if (data.errors.length === 0) {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
        });

        if (!error) {
          try {
            const items = [];
            for (let i = 0; i < cart.items.length; i++) {
              const item = cart.items[i];
              const obj = {
                product: item.product.id,
                quantity: item.quantity,
                price: (item.product.price * item.quantity).toFixed(2),
              };
              items.push(obj);
            }
            const { id } = paymentMethod;
            const newData = {
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              address: data.address,
              zipcode: data.zipcode,
              place: data.place,
              phone: data.phone,
              items: items,
              stripe_token: id,
            };
            const response = await axios.post(
              "http://127.0.0.1:8000/api/v1/checkout/",
              newData
            );

            if (response.status === 201) {
              alert("Successful payment");

              const emptyCart = { items: [] };

              localStorage.setItem("cart", JSON.stringify(emptyCart));

              navigate("/account");
            }
          } catch (error) {
            console.log("Error", error);
          }
        } else {
          setData((previousData) => ({
            ...previousData,
            errors: previousData.errors.concat(error.message),
          }));
        }
      }
    },
  }));

  return (
    <div>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-warning">
        Pay
      </button>
    </div>
  );
});
