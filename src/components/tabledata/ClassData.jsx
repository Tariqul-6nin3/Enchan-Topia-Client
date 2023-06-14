import React, { useState } from "react";
import Swal from "sweetalert2";

const ClassData = ({ classes, index }) => {
  const {
    className,
    classImage,
    instructorEmail,
    availableSeats,
    instructorName,
    numOfStudents,
    price,
    status,
    _id,
  } = classes;

  const [showModal, setShowModal] = useState(false);
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleStatusUpdate = (userId, updateStatus) => {
    fetch(
      `https://enchantopia-server-tariqul-6nin3.vercel.app/classes/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: updateStatus }),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsStatusUpdate(true);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: `Class ${updateStatus} successfully`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFeedbackClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Feedback update function
  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      // Make API request to update feedback option
      const response = await fetch(
        `https://enchantopia-server-tariqul-6nin3.vercel.app/classes/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback: feedbackText }),
        }
      );

      // Handle successful response
      if (response.ok) {
        closeModal();
        Swal.fire({
          title: "Success!",
          text: "Feedback submitted successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr className="hover overflow-scroll">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={classImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold"></div>
          <h2>{className}</h2>
        </div>
      </td>
      <td>
        <h3>{instructorName}</h3>
      </td>
      <td>
        <h3>{instructorEmail}</h3>
      </td>
      <td>
        <h3>{availableSeats}</h3>
      </td>
      <td>
        <h3>{price}</h3>
      </td>
      <td className="flex flex-col gap-2">
        <button
          onClick={() => handleStatusUpdate(_id, "approved")}
          disabled={
            isStatusUpdate || status === "approved" || status === "denied"
          }
          className="btn btn-xs hover:bg-cyan-600 btn-info">
          Approved
        </button>
        <button
          onClick={() => handleStatusUpdate(_id, "denied")}
          disabled={
            isStatusUpdate || status === "denied" || status === "approved"
          }
          className="btn btn-xs hover:bg-orange-700 btn-warning">
          Deny
        </button>
        <button
          className="btn btn-xs btn-outline"
          onClick={handleFeedbackClick}>
          Feedback
        </button>
      </td>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl ml-4 font-bold mb-4">Feedback</h3>
            <form className="" onSubmit={handleFormSubmit}>
              <textarea
                onChange={e => setFeedbackText(e.target.value)}
                className="block bg-[#e5e7eb] px-4 py-3"
                name=""
                id=""
                cols="75"
                rows="10"></textarea>
              <div className="flex px-6 flex-row-reverse justify-between">
                <button
                  className="btn btn-sm  btn-accent   mt-4"
                  onClick={closeModal}>
                  Close
                </button>
                <button
                  style={{
                    background:
                      "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                  }}
                  className="btn text-white btn-outline btn-sm mt-4  "
                  type="submit">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </tr>
  );
};

export default ClassData;
