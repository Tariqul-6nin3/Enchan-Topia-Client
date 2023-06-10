import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import SingleClass from "../SingleClass/SingleClass";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then(res => res.json())
      .then(data => {
        setPopularClass(data);
        console.log(data);
      });
  }, []);

  return (
    <Container>
      <h3 className="text-3xl text-center text-slate-900 mx-auto font-bold font-mono">
        Popular Classes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularClass?.map(classItem => (
          <SingleClass key={classItem._id} classItem={classItem}></SingleClass>
        ))}
      </div>
    </Container>
  );
};

export default PopularClass;
