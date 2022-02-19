import React, { forwardRef } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51KUdLVEd6gygDdvYNeXSDA0p45QxKSoRXHVnyNh4OBvVCM16zhHBlKYZsei8NsDOTb51Vnvn4lOGeZ72Gow3c3rf00adGmFgtO";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeComponent = forwardRef(({ data, setData }, ref) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm data={data} setData={setData} ref={ref} />
    </Elements>
  );
});
