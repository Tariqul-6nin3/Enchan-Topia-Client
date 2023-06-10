/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import animationData from "../../../src/assets/erroricon.json";
import Lottie from "react-lottie";
// import { myContext } from "../providers/Context";

const ErrorPage = () => {
  //   const { error } = useContext(myContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="grid grid-cols-2  min-h-screen bg-base-200">
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-primary-500 mb-8">
          Oops!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl text-gray-700 mb-8">
          Something Went Wrong
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="btn btn-primary">
          <Link to="/"> Go back to safety</Link>
        </motion.button>
      </div>
      {/* lottie animation here */}
      <div>
        <div>
          <Lottie options={defaultOptions} height={620} width={650}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
