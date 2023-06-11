import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import InstrData from "./InstrData";

const Instructor = () => {
  const [allinstructor, setAllinstructor] = useState([]);
  console.log(allinstructor);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then(res => res.json())
      .then(data => {
        setAllinstructor(data);
        console.log(data);
      });
  }, []);
  return (
    <Container>
      <div className="overflow-x-auto px-6">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="">
              <th>S/L NO</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Num of Student</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="space-y-3">
            {allinstructor?.map((instructors, index) => (
              <InstrData
                key={instructors.email}
                index={index}
                instructors={instructors}></InstrData>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Instructor;
