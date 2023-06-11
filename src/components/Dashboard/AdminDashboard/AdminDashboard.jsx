import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex  h-screen">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-none">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/dash/allclass">Manage Class</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/dash/alluser">Manage Users</Link>
          </li>

          {/* Add more sidebar items */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-scroll">
        {/* Content */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
