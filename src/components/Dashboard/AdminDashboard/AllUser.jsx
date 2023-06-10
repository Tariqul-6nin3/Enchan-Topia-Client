import React, { useEffect, useState } from "react";
import TableData from "../../tabledata/TableData";

const AllUser = () => {
  const [allUser, setAllUser] = useState([]);
  console.log(allUser);

  useEffect(() => {
    fetch("http://localhost:5000/alluser")
      .then(res => res.json())
      .then(data => {
        setAllUser(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto px-6">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="">
            <th>S/L NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody className="space-y-3">
          {allUser?.map((users, index) => (
            <TableData
              key={users.email}
              index={index}
              users={users}></TableData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
