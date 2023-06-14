import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../providers/Context";
import Swal from "sweetalert2";
import { FaBeer, FaUserAstronaut } from "react-icons/fa";
import { MdCurrencyExchange, MdEventSeat } from "react-icons/md";
import { AwesomeButton } from "react-awesome-button";
import "../approvedClass/ApprovedClass.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ApprovedClsData = ({ classes }) => {
  const navigate = useNavigate();
  const { _id, classImage, className, instructorName, availableSeats, price } =
    classes;
  const modifiedClass = {
    priviousId: _id,
    classImage,
    className,
    instructorName,
    availableSeats,
    price,
  };
  const { role, user } = useContext(myContext);
  console.log(role);

  const isAdminOrInstructor = role === "admin" || role === "instructor";

  const isButtonDisabled = availableSeats === 0 || isAdminOrInstructor;

  const handleBookNow = async user => {
    if (!user) {
      Swal.fire({
        title: "You are not logged In",
        text: "To select magic class log in first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn?",
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire("Now you are on logIn page");
          return navigate("/login");
        }
      });
    }
    const payload = {
      ...modifiedClass,
      email: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/bookedclass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Class added successfully",
          icon: "success",
          confirmButtonText: "OK",
        });

        console.log("Booking successful!");
      } else {
        console.log("Booking failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="card border hover:border hover:border-sky-600  class-item w-96 bg-base-100 shadow-xl">
      <div className="w-full h-64 object-cover rounded-xl">
        <img
          className="w-full rounded-xl h-full object-cover"
          src={classImage}
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>
          Welcome to the enchanting world of magic! Join our immersive "Magic
          Learning" class and unlock the secrets behind captivating illusions
          and mind-boggling tricks.
        </p>

        <div className="card-actions  justify-between">
          <div>
            <h2 className="text-md font-semibold ">
              <FaUserAstronaut className="inline mr-3 text-2xl font-bold"></FaUserAstronaut>{" "}
              {instructorName}
            </h2>
            <p className="text-md">
              {" "}
              <MdEventSeat className="inline mr-3 text-2xl font-bold"></MdEventSeat>{" "}
              Available seat: {availableSeats}
            </p>
            <p className="text-md">
              <MdCurrencyExchange className="inline mr-3 text-2xl font-bold"></MdCurrencyExchange>{" "}
              Price: ${price}
            </p>
          </div>
          <div onClick={() => handleBookNow(user)} className="mt-auto">
            <AwesomeButton
              disabled={isButtonDisabled}
              type="primary"
              size="small">
              Select
            </AwesomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedClsData;
