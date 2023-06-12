import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-modal";
import CheckoutForm from "../../checkout/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const SClassData = ({ selectedClass }) => {
  const stripePromise = loadStripe(
    "pk_test_51NI2P3HUp9RdPjle2pAmXFxrK6omFFahemtEZHWVRgsp6U1afiF7WkTvKKXiKsgpzQINfHOTaWpWtQXSvaQ4y0SA00Qg7D12Uj"
  );
  const {
    _id,
    availableSeats,
    classImage,
    className,
    email,
    instructorEmail,
    instructorImage,
    instructorName,
    numOfStudents,
    price,
    status,
  } = selectedClass;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = id => {
    fetch(`http://localhost:5000/selected/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then(result => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
        }
      });
  };

  const handlePay = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={classImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>{instructorName}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-accent"
              onClick={() => handleDelete(_id)}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={handlePay}>
              Pay
            </button>
          </div>
        </div>
      </div>

      <Modal
        className="w-1/3 bg-slate-400 items-center"
        isOpen={isModalOpen}
        onRequestClose={closeModal}>
        <Elements stripe={stripePromise}>
          <CheckoutForm itemPrice={price} />
        </Elements>
        <button className="btn btn-accent" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SClassData;
