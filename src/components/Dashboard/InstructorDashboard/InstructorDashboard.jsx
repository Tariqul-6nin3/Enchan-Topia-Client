import React from "react";
import { Link, Outlet } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <div className="flex h-screen px-14">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-none mt-6 h-screen">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/dash/addclass">Add Class</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <a href="#" className="block">
              My Classes
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <a href="#" className="block">
              Total Enroll Students
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <a href="#" className="block">
              Feedbacks
            </a>
          </li>
          {/* Add more sidebar items */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default InstructorDashboard;
