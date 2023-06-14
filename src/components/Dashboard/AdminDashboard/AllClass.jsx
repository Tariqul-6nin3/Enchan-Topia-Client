import React, { useEffect, useState } from "react";
import ClassData from "../../tabledata/ClassData";

const AllClass = () => {
  const [allclass, setAllclass] = useState([]);
  console.log(allclass);
  useEffect(() => {
    fetch("https://enchantopia-server-tariqul-6nin3.vercel.app/allclass")
      .then(res => res.json())
      .then(data => {
        setAllclass(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto px-6">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="">
            <th>Class Image</th>
            <th>Class Name</th>
            <th>Instr Name</th>
            <th>Instr Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {allclass?.map((classes, index) => (
            <ClassData
              key={classes._id}
              index={index}
              classes={classes}></ClassData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClass;
