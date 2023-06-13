import React from "react";

const EnrollData = ({ enrollClass }) => {
  console.log(enrollClass);
  const { classImage, className, instructorEmail, price, transactionId, date } =
    enrollClass;
  console.log(classImage);
  return (
    <>
      <tr className="hover space-y-6">
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={classImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{className}</div>
          </div>
        </td>
        <td>
          <h3>{instructorEmail}</h3>
        </td>
        <td>
          <h3>{price}</h3>
        </td>
        <td>
          <h3>{date}</h3>
        </td>
        <td>
          <h3>{transactionId}</h3>
        </td>
      </tr>
    </>
  );
};

export default EnrollData;
