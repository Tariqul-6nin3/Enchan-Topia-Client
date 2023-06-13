import React, { useContext } from "react";
import { myContext } from "../../../providers/Context";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { AiFillHome } from "react-icons/ai";
import { BiSelectMultiple, BiSolidObjectsHorizontalLeft } from "react-icons/bi";
import { DiGhostSmall } from "react-icons/di";

const StudentDashboard = () => {
  const { user } = useContext(myContext);
  console.log(user);
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
      <div className=" bg-[#1e90ff] pb-36 fixed  text-white w-72 flex-none">
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
                <AiFillHome className=" text-xl"></AiFillHome>
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2">
                <BiSelectMultiple></BiSelectMultiple>
                <Link to="/dash/myselected"> My selected class</Link>
              </li>
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2">
                <DiGhostSmall></DiGhostSmall>
                <Link to="/dash/enroll">My enroll class</Link>
              </li>
              <li className="px-4 flex gap-2 items-center bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2">
                <Link to="/dash/payment">Payment History</Link>
              </li>

              {/* Add more sidebar items */}
            </ul>
          </div>
        </div>
        <hr className="text-white font-bold w-9/12 mx-4 border-2" />
        <div className="ml-5 py-5 space-y-6">
          <Link to="/instructor">
            {" "}
            <li className="px-4 bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2 list-none">
              Instructor
            </li>
          </Link>
          <Link to="/approvedclass">
            {" "}
            <li className="px-4 bg-cyan-600 w-9/12 text-lg font-semibold py-2 mt-2 mb-3 list-none">
              Classes
            </li>
          </Link>
          <Link to="/login">
            <AwesomeButton
              size="large"
              type="secondary"
              className="text-black mt-3 font-semibold"
              onClick={handlelogOut}>
              LogOut
            </AwesomeButton>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 ps-80">
        {/* Content */}
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Outlet />
      </div>
    </div>
  );
};

export default StudentDashboard;
