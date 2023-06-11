import React, { useState } from "react";

const ClassDetails = ({ mycls }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    addedby,
    availableSeats,
    classImage,
    className,
    feedback,
    instructorImage,
    instructorName,
    numOfStudents,
    price,
    status,
    _id,
  } = mycls;

  const handleFeedbackClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={classImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions justify-center">
            <button className="btn btn-accent btn-md">{status}</button>
            <button className="btn btn-primary" onClick={handleFeedbackClick}>
              Feedback
            </button>
            <button className="btn btn-success">Update</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl ml-4 font-bold mb-4">Feedback</h3>
            <form className="">
              <textarea
                className="block bg-[#e5e7eb] px-4 py-3 text-xl font-mono font-semibold text-orange-600"
                name=""
                id=""
                cols="75"
                rows="10">
                {feedback}
              </textarea>
              <div className="flex px-6  justify-end">
                <button
                  className="btn btn-sm  btn-accent   mt-4"
                  onClick={closeModal}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassDetails;
