import React, { useEffect, useState } from "react";
import Container from "../../container/Container";
import PaymentData from "./PaymentData";

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);
  useEffect(() => {
    fetch("https://enchantopia-server-tariqul-6nin3.vercel.app/payment")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPaymentData(data);
      });
  }, []);
  return (
    <Container>
      <div className="overflow-x-auto px-6">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>Class Image</th>
              <th>Class Name</th>

              <th>Price</th>
              <th>Payment Date</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody className="space-y-3 mt-6">
            {paymentData?.map(PData => (
              <PaymentData key={PData._id} paymentData={PData}></PaymentData>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Payment;
