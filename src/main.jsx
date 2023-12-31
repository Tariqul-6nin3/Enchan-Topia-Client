import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import ErrorPage from "./pages/errorpage/Errorpage.jsx";
import Context from "./providers/Context.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Home from "./pages/homepage/Home.jsx";
import DashboardContainer from "./components/DashboardContainer/DashboardContainer";
import Addclass from "./components/Dashboard/InstructorDashboard/Addclass";
import AllUser from "./components/Dashboard/AdminDashboard/AllUser";
import AllClass from "./components/Dashboard/AdminDashboard/AllClass";
import Instructor from "./components/instructor/Instructor";
import ApprovedClass from "./components/approvedClass/ApprovedClass";
import Myclass from "./components/Dashboard/InstructorDashboard/Myclass";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Myselected from "./components/Dashboard/StudentDashboard/Myselected";
import EnrollClass from "./components/Dashboard/StudentDashboard/EnrollClass";
import Payment from "./components/Dashboard/StudentDashboard/Payment";
import PrivateRoutes from "./privateroutes/PrivateRoutes";
import IsAdmin from "./privateroutes/IsAdmin";
import IsInstructor from "./privateroutes/IsInstructor";
import DashboardHome from "./components/DashboardContainer/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "instructor",
        element: <Instructor />,
      },
      {
        path: "approvedclass",
        element: <ApprovedClass />,
      },
    ],
  },
  {
    path: "dash",
    element: <DashboardContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dash/addclass",
        element: (
          <PrivateRoutes>
            <Addclass></Addclass>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/dashhome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dash/alluser",
        element: (
          <PrivateRoutes>
            <IsAdmin>
              <AllUser></AllUser>
            </IsAdmin>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/allclass",
        element: (
          <PrivateRoutes>
            <IsAdmin>
              <AllClass></AllClass>
            </IsAdmin>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/myclass",
        element: (
          <PrivateRoutes>
            <IsInstructor>
              <Myclass></Myclass>
            </IsInstructor>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dash/myselected",
        element: <Myselected />,
      },
      {
        path: "/dash/enroll",
        element: <EnrollClass />,
      },
      {
        path: "/dash/payment",
        element: <Payment />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Context>
  </React.StrictMode>
);
