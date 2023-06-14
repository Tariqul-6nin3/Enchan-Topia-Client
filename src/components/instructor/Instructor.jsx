import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import InstrData from "./InstrData";

const Instructor = () => {
  const [allinstructor, setAllinstructor] = useState([]);
  console.log(allinstructor);

  useEffect(() => {
    fetch("https://enchantopia-server-tariqul-6nin3.vercel.app/instructors")
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
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Num of Student</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="space-y-3 mt-6">
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
