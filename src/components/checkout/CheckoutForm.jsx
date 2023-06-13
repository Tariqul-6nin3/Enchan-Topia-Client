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
import { updateStatus } from "../../api/saveUser";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useNavigation } from "react-router-dom";
// import { useDeleteClass } from "../../hooks/useDeleteClass";

const CheckoutForm = ({ selectedClass, closeModal, modifiedData }) => {
  const navigate = useNavigate();
  const { user } = useContext(myContext);
  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setCarderror] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  // const { deleteClass } = useDeleteClass();
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
    event.preventDefault();
    if (!stripe || !elements) {
      d.return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
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
        ...modifiedData,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      AxiosSecure.post("/bookings", paymentInfo).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          updateStatus(selectedClass._id, true)
            .then(data => {
              console.log(data);
              const text = `Payment Successful!, TransactionId: ${paymentIntent.id}`;
              toast(text);
              closeModal();
              // Remove the class from the UI using the useDeleteClass hook

              AxiosSecure.delete(`/selected/${selectedClass._id}`)
                .then(() => {
                  navigate("/dash/mySelected");
                })
                .catch(err => console.log(err));
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
