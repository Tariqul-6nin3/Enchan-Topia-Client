import React, { useContext } from "react";
import { myContext } from "../../providers/Context";
import Swal from "sweetalert2";

const ApprovedClsData = ({ classes }) => {
  const { _id, classImage, className, instructorName, availableSeats, price } =
    classes;
  const { user } = useContext(myContext);
  console.log(user);
  //   const isAdminOrInstructor =
  //     user.role === "admin" || user.role === "instructor";

  //   const isButtonDisabled = availableSeats === 0 || isAdminOrInstructor;

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
        // Request succeeded, handle the success case
        console.log("Booking successful!");
      } else {
        // Request failed, handle the error case
        console.log("Booking failed!");
      }
    } catch (error) {
      // Handle any network or server errors
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
          {/* Fixed a typo, use `price` instead of `availableSeats` */}
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-outline" onClick={handleBookNow}>
              book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedClsData;
