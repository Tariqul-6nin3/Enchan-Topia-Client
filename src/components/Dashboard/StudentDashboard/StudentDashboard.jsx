import React, { useContext } from "react";
import { myContext } from "../../../providers/Context";
import { Link, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const { logOutUser } = useContext(myContext);
  const handlelogOut = () => {
    logOutUser()
      .then(() => {
        toast("LogOut successfully!!!");
      })
      .catch(error => {});
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-none">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className=" ">
          <ul className="py-4">
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">
                My selected class
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">
                My enroll class
              </a>
            </li>
            <button className="btn mt-40" onClick={handlelogOut}>
              LogOut
            </button>
            {/* Add more sidebar items */}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Content */}
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
