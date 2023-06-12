import React from "react";
import Swal from "sweetalert2";

const SClassData = ({ selectedClass }) => {
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
  console.log(selectedClass);

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
            <button className="btn btn-primary">pay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SClassData;
