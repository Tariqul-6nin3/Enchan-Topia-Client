import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-modal";
import CheckoutForm from "../../checkout/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { myContext } from "../../../providers/Context";
import { ImCross } from "react-icons/im";
import { RiSecurePaymentLine, RiDeleteBin5Fill } from "react-icons/ri";

const SClassData = ({ selectedClass, refetch }) => {
  const { user } = useContext(myContext);
  console.log(user);

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
  console.log(_id);

  const modifiedData = {
    previousId: _id,
    email: user?.email,
    name: user?.displayName,
    availableSeats,
    classImage,
    className,
    instructorEmail,
    instructorImage,
    numOfStudents,
    price,
    status,
  };
  // console.log(modifiedData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = email => {
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
        fetch(
          `https://enchantopia-server-tariqul-6nin3.vercel.app/selected/${email}`,
          { method: "DELETE" }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      } else {
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
    <>
      <tr className="hover z-0 relative space-y-6">
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{className}</div>
          </div>
        </td>
        <td>
          <h3>{instructorEmail}</h3>
        </td>
        <td>
          <h3>{price}</h3>
        </td>
        <td>
          <h3>{availableSeats}</h3>
        </td>
        <td>
          <button
            className="hover:scale-x-110"
            onClick={() => handleDelete(instructorEmail)}>
            <RiDeleteBin5Fill className="text-2xl font-bold text-black"></RiDeleteBin5Fill>
          </button>
        </td>
        <td>
          <button className="hover:scale-x-110" onClick={handlePay}>
            <RiSecurePaymentLine className="text-2xl font-bold text-black"></RiSecurePaymentLine>
          </button>
        </td>
      </tr>
      <Modal
        className="w-1/2 relative  bg-[#7d5fff]  mx-auto py-6 rounded-2xl px-5 mt-10  z-50  "
        isOpen={isModalOpen}
        onRequestClose={closeModal}>
        <h2 className="text-4xl text-white font-bold   text-center">
          Proceed to pay
        </h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            closeModal={closeModal}
            modifiedData={modifiedData}
            selectedClass={selectedClass}
          />
        </Elements>
        <button
          className="btn top-2 right-2 absolute bg-red-600 btn-sm ml-auto"
          onClick={closeModal}>
          <ImCross></ImCross>
        </button>
      </Modal>
    </>
  );
};

export default SClassData;
