import React from "react";

const InstructorData = ({ classItem }) => {
  const {
    name,
    number_of_students,
    price,
    image,
    available_seats,
    instructor,
  } = classItem;
  // console.log(classItem);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <p className="text-green-600 font-bold">Price: ${price}</p>
          <p>Total student:{number_of_students}</p>
          <p>Seats:{available_seats}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-sm">See Class</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorData;
