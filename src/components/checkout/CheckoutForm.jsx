import React, { useContext, useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import "../checkout/Checkout.css";
import "react-toastify/dist/ReactToastify.css";
import { myContext } from "../../providers/Context";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { updateStatus } from "../../api/SaveUser";
import { ToastContainer, toast } from "react-toastify";
import { useNavigation } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutForm = ({ selectedClass }) => {
  const navigate = useNavigation();
  const { user } = useContext(myContext);
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const [AxiosSecure] = useAxiosSecure();
  useEffect(() => {
    if (selectedClass.price > 0) {
      AxiosSecure.post("/create-payment-intent", {
        price: selectedClass.price,
      }).then(res => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [selectedClass, AxiosSecure]);

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
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCarderror(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      const paymentInfo = {
        ...selectedClass,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      AxiosSecure.post("/bookings", paymentInfo).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          updateStatus(selectedClass._id, true)
            .then(data => {
              setProcessing(false);
              console.log(data);
              const text = `Payment Successful!, TransactionId: ${paymentIntent.id}`;
              alert(text);
              navigate("/dash/mySelected");
            })
            .catch(err => console.log(err));
        }
      });
    }
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
      <ToastContainer></ToastContainer>
    </>
  );
};

export default CheckoutForm;
