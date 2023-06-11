import React from "react";

const ApprovedClsData = ({ classes }) => {
  const { _id, classImage, className, instructorName, availableSeats, price } =
    classes;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={classImage} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedClsData;
