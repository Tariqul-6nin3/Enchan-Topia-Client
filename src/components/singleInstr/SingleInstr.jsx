import React from "react";
import Container from "../container/Container";
import "../SingleClass/SingleClass.css";

const SingleInstr = ({ instr }) => {
  const {
    availableSeats,
    classImage,
    className,
    instructorEmail,
    instructorImage,
    instructorName,
    numOfStudents,
  } = instr;
  console.log(instr);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 w-11/12" src={instructorImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p className="text-lg font-semibold">{instructorEmail}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm text-white bg-[#1e90ff] ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleInstr;
