import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../providers/Context";
import Swal from "sweetalert2";

const ApprovedClsData = ({ classes }) => {
  const { _id, classImage, className, instructorName, availableSeats, price } =
    classes;
  const { role, user } = useContext(myContext);
  console.log(role);

  const isAdminOrInstructor = role === "admin" || role === "instructor";

  const isButtonDisabled = availableSeats === 0 || isAdminOrInstructor;

  const handleBookNow = async () => {
    const payload = {
      ...classes,
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
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-64 h-64">
          <img className="w-full" src={classImage} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p className="text-xl font-semibold">Author: {instructorName}</p>
          <p className="text-xl font-semibold">
            Total Vacancy: {availableSeats}
          </p>
          <p className="text-xl font-semibold">Amount: $ {price}</p>{" "}
          <div className="card-actions justify-end">
            <button
              disabled={isButtonDisabled}
              className="btn btn-sm btn-outline"
              onClick={handleBookNow}>
              book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedClsData;
