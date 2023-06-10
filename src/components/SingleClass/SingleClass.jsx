import React from "react";
import { Rating } from "@smastrom/react-rating";
import { FaThumbsUp } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

const SingleClass = ({ classItem }) => {
  const {
    name,
    number_of_students,
    price,
    image,
    available_seats,
    instructor,
  } = classItem;
  // console.log(instructor);
  return (
    <div className="card menu-item card-compact pt-2 pb-7 w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-96 px-2 py-4 w-full object-cover  rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="px-4 py-2">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="mt-3 text-base">{}</p>
          <h4 className="text-lg mt-2 font-semibold">
            Experience:
            <span className="text-stone-950"> {}</span> Years of Experience
          </h4>
          <p className="mt-2">
            <FaThumbsUp className="inline mr-4 text-2xl hover:translate-x-1" />
            {} Likes
          </p>

          <div className="card-actions mt-3 flex flex-col md:flex-row justify-between items-center">
            <div className="mt-1">
              <Rating readOnly style={{ maxWidth: 120 }} value={5}></Rating>
            </div>
            <button className="btn-secondary">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
