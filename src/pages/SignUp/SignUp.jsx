/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import animationdata2 from "../../assets/tariqul.json";
import Lottie from "react-lottie";
import { Helmet } from "react-helmet";
import { myContext } from "../../providers/Context";
import { useForm } from "react-hook-form";
import { saveUser } from "../../api/SaveUser";

const SignUp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationdata2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { createUser } = useContext(myContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    if (data.password !== data.confirm) {
      return setError("Your password doesn't match. Please check again");
    }
    createUser(data.email, data.password)
      .then(result => {
        const createdUser = result.user;
        // save user to userCollection
        saveUser(createdUser, data.photo, data.name) // Pass photoUrl and displayName
          .then(() => {
            console.log(createdUser);
            navigate("/login");
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Enchantopia | register</title>
      </Helmet>
      <div
        style={{
          background:
            'url("https://i.postimg.cc/cJF1KRJh/thomas-heintz-0tg-Mn-MIYQ9-Y-unsplash.jpg")',
        }}
        className="grid gap-0 grid-cols-2 py-16 ">
        <div className="max-w-lg flex items-center animate-pulse mx-auto">
          <Lottie options={defaultOptions} height={650} width={500} />
        </div>
        <div className="w-10/12 mx-auto">
          <div className="max-w-xl w-11/12 md:w-full md:max-w-2xl  md:space-y-6 py-10 mx-auto ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" w-11/12 flex-shrink-0 mx-auto rounded-xl bg-[#e5e7eb]  shadow-2xl  px-3 md:px-4">
              <div className=" text-center"></div>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">Name</span>
                  </label>
                  <input
                    type="name"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="border-b-2  border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 10,
                      pattern:
                        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                    })}
                    placeholder="password"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />

                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password should be more than 6 character
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      Password should be less than 10 character
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password should be less than 10 character
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-gray-700 font-bold mb-1">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="confirm"
                    {...register("confirm", { required: true })}
                    placeholder="Confirm password"
                    className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <p className="text-red-600">{error}</p>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-1"
                    htmlFor="photo">
                    Profile Photo URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="photo"
                    type="text"
                    name="photo"
                    {...register("photo", { required: true })}
                    placeholder="Enter the URL for your profile photo"
                  />
                  {errors.photo && (
                    <span className="text-red-600">
                      Photo field is required
                    </span>
                  )}
                </div>

                <div className="form-control w-full md:w-1/2 mx-auto mt-3">
                  <button
                    style={{
                      background:
                        "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                    }}
                    className="btn text-white ">
                    Sign Up
                  </button>
                </div>
                <p className="text-gray-700 text-xl mt-2 font-semibold">
                  Already have an account?
                  <Link
                    className="text-red-500 ml-2 text-lg font-semibold"
                    to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
