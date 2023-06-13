import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../public/logooooo.jpeg";

import { Tooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { myContext } from "../../providers/Context";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(myContext);

  const [open, setOpen] = useState(true);

  const handlelogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
        toast("LogOut successfully!!!");
      })
      .catch(error => {});
  };

  return (
    <div className="navbar  text-white  bg-[#1e90ff]  py-2 justify-between px-8  container mx-auto">
      <div className="flex-1 gap-2">
        <img
          className="w-10 h-10 animate-bounce animate-pulse"
          src={logo}
          alt=""
        />
        <Link to="/">
          <h3 className="text-3xl font-serif font-bold ">EnchanTopia</h3>
        </Link>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end hidden lg:block">
          <ul tabIndex={0} className="flex gap-5 items-center font-bold ">
            <Link>
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Home
              </li>
            </Link>
            <Link to="/instructor">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Instructor
              </li>
            </Link>
            <Link to="/approvedclass">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Classes
              </li>
            </Link>

            <Link to="/dash">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Dashboard
              </li>
            </Link>

            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              {user ? (
                <button className="btn btn-sm" onClick={handlelogOut}>
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-sm">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end sm:ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div
              className="w-12 rounded-full"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user ? user.displayName : "Add User"}>
              <Tooltip className="z-30" id="my-tooltip"></Tooltip>
              <img
                src={
                  user
                    ? user.photoURL
                    : "https://i.postimg.cc/3NN5Wh9W/cesar-rincon-XHVp-Wcr5gr-Q-unsplash.jpg"
                }
                alt=""
              />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="menu lg:hidden dropdown-content divide-y mt-3 px-6 py-2 shadow bg-base-100 rounded-box w-72 md:w-72 text-lg">
            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            </li>
            <Link>
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Home
              </li>
            </Link>
            <Link to="instructor">
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Instructor
              </li>
            </Link>
            <Link>
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Classes
              </li>
            </Link>

            <Link to="/dashboard">
              {" "}
              <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
                Dashboard
              </li>
            </Link>

            <li className="hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200">
              {user ? (
                <button className="btn " onClick={handlelogOut}>
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
