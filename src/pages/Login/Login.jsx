import animationData from "../../assets/login-page.json";
import Lottie from "react-lottie";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../../firebase.config";
import { myContext } from "../../providers/Context";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { saveUser } from "../../api/saveUser";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const { loggedInUser } = useContext(myContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    loggedInUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(result.user);
        setError("");
        navigate("/");
        toast("LogIn successfully!!!");
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const googleUser = result.user;
        // save user to userCollection
        saveUser(googleUser);
        console.log(googleUser);
        setUser(googleUser);
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>EnchanTopia | login</title>
      </Helmet>
      <div
        style={{
          background:
            'url("https://i.postimg.cc/cJF1KRJh/thomas-heintz-0tg-Mn-MIYQ9-Y-unsplash.jpg")',
        }}
        className="flex items-center h-screen w-full">
        <ToastContainer
          position="top-right"
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
        <div className="w-full max-w-5xl mx-auto flex md:flex-row gap-3 flex-col justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="max-w-lg mx-auto  animate-pulse">
              <Lottie options={defaultOptions} height={500} width={450} />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#e5e7eb] w-1/2 mx-auto px-5 py-4 rounded-t-2xl md:ml-5 md:px-8 md:py-5">
            <h2 className="text-4xl text-center  font-bold mb-6 text-black">
              Login
            </h2>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <span className="text-red-600">Insert your email first</span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <span className="text-red-600">Insert your password first</span>
              )}
            </div>
            <div className="mb-6 text-center">
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-8 w-1/3 rounded-full focus:outline-none focus:shadow-outline"
                type="submit">
                Login
              </button>
            </div>
            <p className="text-red-900 font-semibold text-xl mb-5 mt-3">
              {error}
            </p>
            <div className="divider">OR</div>
            <div className="flex md:flex-row flex-col justify-center">
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                }}
                onClick={handleGoogleLogIn}
                className="btn btn-outline md:mx-2 mt-4 text-white px-4">
                <FaGoogle className="mr-3 text-2xl" />
                Continue with Google
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-xl font-semibold ">
                New to here? Please{" "}
                <Link
                  className="text-red-500 ml-2 text-lg font-semibold"
                  to="/signup">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
