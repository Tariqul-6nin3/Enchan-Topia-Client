import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
import { myContext } from "../providers/Context";

const IsAdmin = ({ children }) => {
  const { user, loading } = useContext(myContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  if (user.role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default IsAdmin;
