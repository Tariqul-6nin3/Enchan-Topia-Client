import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { myContext } from "../../../providers/Context";
import { AwesomeButton } from "react-awesome-button";
import { AiFillHome } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { DiGhostSmall } from "react-icons/di";
import { GiTeacher } from "react-icons/gi";
import { GiClassicalKnowledge } from "react-icons/gi";

const AdminDashboard = () => {
  const { user, logOutUser } = useContext(myContext);
  const handlelogOut = () => {
    logOutUser()
      .then(() => {
        toast("LogOut successfully!!!");
      })
      .catch(error => {});
  };
  return (
    // <div className="flex  h-screen">
    //   {/* Sidebar */}
    //   <div className="bg-gray-900 text-white w-64 flex-none">
    //     {/* Sidebar content */}
    //     <div className="p-4">
    //       <h1 className="text-2xl font-bold">Dashboard</h1>
    //     </div>
    //     <ul className="py-4">
    //       <li className="px-4 py-2 hover:bg-gray-800">
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li className="px-4 py-2 hover:bg-gray-800">
    //         <Link to="/dash/allclass">Manage Class</Link>
    //       </li>
    //       <li className="px-4 py-2 hover:bg-gray-800">
    //         <Link to="/dash/alluser">Manage Users</Link>
    //       </li>

    //       {/* Add more sidebar items */}
    //     </ul>
    //   </div>

    //   {/* Main Content */}
    //   <div className="flex-grow p-6 overflow-scroll">
    //     {/* Content */}
    //     <Outlet />
    //   </div>
    // </div>

    <div className="flex h-screen">
      {/* Sidebar */}
      <div className=" bg-[#1e90ff] pb-36 fixed text-white w-72 flex-none">
        {/* Sidebar content */}

        <div className=" ml-5 mt-6">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="ml-4">
            <div className="avatar">
              <div className="w-32  rounded-xl">
                <img
                  src="https://i.postimg.cc/3NN5Wh9W/cesar-rincon-XHVp-Wcr5gr-Q-unsplash.jpg"
                  alt=""
                />
                <h1>{user ? user.displayName : "Default User"}</h1>
              </div>
            </div>
          </div>
          <div className=" ">
            <ul className="py-4">
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2">
                <AiFillHome></AiFillHome>
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2">
                <BiSelectMultiple></BiSelectMultiple>
                <Link to="/dash/allclass">Manage Class</Link>
              </li>
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2">
                <DiGhostSmall></DiGhostSmall>
                <Link to="/dash/alluser">Manage Users</Link>
              </li>

              {/* Add more sidebar items */}
            </ul>
          </div>
        </div>
        <hr className="text-white font-bold w-9/12 mx-4 border-2" />
        <div className="ml-5 space-y-2 ">
          {" "}
          <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2 list-none">
            <GiTeacher></GiTeacher> <Link to="/instructor">Instructor</Link>
          </li>{" "}
          <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg mb-3 font-semibold py-2  list-none">
            <GiClassicalKnowledge></GiClassicalKnowledge>
            <Link to="/approvedclass"> Classes</Link>
          </li>
          <div className="">
            <Link to="/login">
              <AwesomeButton
                size="large"
                type="secondary"
                onClick={handlelogOut}>
                LogOut
              </AwesomeButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 ps-80">
        {/* Content */}
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
