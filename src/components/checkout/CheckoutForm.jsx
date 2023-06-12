import React, { useContext, useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "../checkout/Checkout.css";
import { myContext } from "../../providers/Context";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutForm = ({ itemPrice }) => {
  const { AxiosSecure } = useAxiosSecure();
  const { user } = useContext(myContext);
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (itemPrice > 0) {
      AxiosSecure.post("/create-payment-intent", {
        price: itemPrice,
      }).then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [itemPrice, AxiosSecure]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCarderror(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "annonymous",
          },
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {carderror && (
        <p className="text-red-600 text-lg font-semibold">{carderror}</p>
      )}
    </>
  );
};

export default CheckoutForm;
