import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import ApprovedClsData from "./ApprovedClsData";

const ApprovedClass = () => {
  const [approvedClass, setApprovedClass] = useState([]);
  //   console.log(approvedClass);
  useEffect(() => {
    fetch("http://localhost:5000/approvedclass")
      .then(res => res.json())
      .then(data => {
        setApprovedClass(data);
      });
  }, []);
  return (
    <Container>
      <div>
        <h2 className="text-3xl font-bold text-center">
          Find Your Suitable Class
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
          {approvedClass?.map(classes => (
            <ApprovedClsData
              key={classes._id}
              classes={classes}></ApprovedClsData>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ApprovedClass;
