import React from "react";

const InstrData = ({ instructors, index }) => {
  console.log(instructors);
  const { instructorName, instructorImage, instructorEmail, numOfStudents } =
    instructors;
  return (
    <tr className="hover">
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={instructorImage} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{instructorName}</div>
          <div className="text-sm opacity-50">Dhaka, Bangladesh</div>
        </div>
      </td>
      <td>
        <h3>{instructorEmail}</h3>
      </td>
      <td>
        <h3>{numOfStudents}</h3>
      </td>

      <td>
        <button className="btn btn-sm btn-neutral">see classes</button>
      </td>
    </tr>
  );
};

export default InstrData;
