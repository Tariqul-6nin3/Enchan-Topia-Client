import React, { useEffect, useState } from "react";
import Container from "../../container/Container";
import EnrollData from "./EnrollData";

const EnrollClass = () => {
  const [enrollClass, setEnrollClass] = useState([]);
  useEffect(() => {
    fetch("https://enchantopia-server-tariqul-6nin3.vercel.app/enroll")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEnrollClass(data);
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
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Payment Date</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody className="space-y-3 mt-6">
            {enrollClass?.map(EClass => (
              <EnrollData key={EClass._id} enrollClass={EClass}></EnrollData>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default EnrollClass;
