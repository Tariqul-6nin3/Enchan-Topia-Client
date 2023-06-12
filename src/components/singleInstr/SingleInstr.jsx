import React from "react";
import Container from "../container/Container";

const SingleInstr = ({ instr }) => {
  const { image, name, email, class_taken, class_names_taken } =
    instr.instructor;
  // console.log(instr.instructor);
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 w-11/12" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
