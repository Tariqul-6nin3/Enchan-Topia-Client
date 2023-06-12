import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CheckOutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51NI2P3HUp9RdPjle2pAmXFxrK6omFFahemtEZHWVRgsp6U1afiF7WkTvKKXiKsgpzQINfHOTaWpWtQXSvaQ4y0SA00Qg7D12Uj"
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckOutPage;
