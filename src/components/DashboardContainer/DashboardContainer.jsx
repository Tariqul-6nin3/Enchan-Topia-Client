import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../providers/Context";
import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard";
import InstructorDashboard from "../Dashboard/InstructorDashboard/InstructorDashboard";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";

const DashboardContainer = () => {
  const { user } = useContext(myContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data);
        })
        .catch(error => console.error(error));
    }
  }, [user]);

  if (userData) {
    return (
      <>
        <div className="">
          {userData.role === "student" && <StudentDashboard />}
          {userData.role === "instructor" && <InstructorDashboard />}
          {userData.role === "admin" && <AdminDashboard />}
        </div>
      </>
    );
  }

  return (
    <div>
      {/* {userData?.role === "student" ? (
        <StudentDashboard />
      ) : userData?.role === "instructor" ? (
        <InstructorDashboard />
      ) : (
        <AdminDashboard />
      )} */}
    </div>
  );
};

export default DashboardContainer;
