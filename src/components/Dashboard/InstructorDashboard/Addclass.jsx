import React from "react";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Helmet } from "react-helmet";
// import { useContext } from "react";
// import { myContext } from "../providers/Context";

import Lottie from "react-lottie";

const Addclass = () => {
  const handleAddClass = event => {
    event.preventDefault();
    const form = event.target;
    const classImage = form.classImage.value;
    const className = form.className.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const instructorImage = form.instructorImage.value;
    const availableSeats = form.availableSeats.value;
    const numOfStudents = form.numOfStudents.value;
    const price = form.price.value;

    const newClass = {
      classImage,
      className,
      instructorName,
      instructorEmail,
      instructorImage,
      availableSeats,
      numOfStudents,
      price,
      status: "pending",
      feedback: "",
    };
    console.log(newClass);

    fetch("http://localhost:5000/newclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Class added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      });
  };

  const toastifying = () => {
    toast("Toy Up For Sell Successfully!!!");
  };
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
      }}
      className="w-full mx-auto  py-6">
      <div className="">
        <h2 className="text-4xl font-bold mb-8 text-center text-white font-serif">
          Add A Class
        </h2>
        <form
          onSubmit={handleAddClass}
          className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-5 mx-auto p-12 bg-[#e5e7eb] rounded-2xl shadow-2xl">
          <div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="classImage">
                Class Image
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="classImage"
                name="classImage"
                type="text"
                placeholder="Enter Class Image URL"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="className">
                Class Name
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="className"
                type="text"
                name="className"
                placeholder="Enter Class Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="instructorName">
                Instructor Name
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="instructorName"
                type="text"
                name="instructorName"
                placeholder="Enter Instructor Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="instructorEmail">
                Instructor Email
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="instructorEmail"
                type="email"
                name="instructorEmail"
                placeholder="Enter Instructor Email"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="instructorImage">
                Instructor Image
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="instructorImage"
                name="instructorImage"
                type="text"
                placeholder="Instructor Image URL"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="availableSeats">
                Available Seats
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="availableSeats"
                type="number"
                name="availableSeats"
                placeholder="Enter Available Seats"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="numofstudent">
                Number of students
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="numofstudent"
                type="number"
                name="numOfStudents"
                placeholder="Number of students"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="price">
                Price
              </label>
              <input
                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                name="price"
                placeholder="Enter the price"
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex justify-center">
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 w-1/3 rounded-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Class
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addclass;
