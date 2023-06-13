import React from "react";

const PaymentData = ({ paymentData }) => {
  console.log(paymentData);
  const { classImage, className, price, date, transactionId } = paymentData;
  return (
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
        <h3>{price}</h3>
      </td>
      <td>
        <h3>{date}</h3>
      </td>
      <td>
        <h3>{transactionId}</h3>
      </td>
    </tr>
  );
};

export default PaymentData;
