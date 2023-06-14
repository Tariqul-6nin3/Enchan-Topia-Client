import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../providers/Context";
import { Vortex } from "react-loader-spinner";
import ClassDetails from "./ClassDetails";
import Container from "../../container/Container";

const Myclass = () => {
  const [myclass, setMyclass] = useState([]);
  const { user, loading } = useContext(myContext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myclass?email=${user.email}`)
      .then(response => {
        console.log(response); // Inspect the response object
        return response.json(); // or response.text() to see the response content
      })
      .then(data => {
        console.log(data);
        setMyclass(data);
        // Check the parsed response data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    // <div>
    //   <h2 className="text-2xl text-slate-900 font-mono font-bold text-center">
    //     Added Classes
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2">
    //     {myclass?.map(mycls => (
    //       <ClassDetails key={mycls._id} mycls={mycls}></ClassDetails>
    //     ))}
    //   </div>
    // </div>
    <>
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
                <th>Enroll Student</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody className="space-y-3 mt-6">
              {myclass?.map(mycls => (
                <ClassDetails key={mycls._id} mycls={mycls}></ClassDetails>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default Myclass;
