import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { userSignIn, userGoogleSignIn } = use(AuthContext);
  const navigate = useNavigate();

  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };
  const errorAlert = (msg) => {
    Swal.fire({
      title: "Error!",
      text: `${msg}`,
      icon: "error",
      showConfirmButton: true,
    });
  };
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignIn(email, password)
      .then(() => {
        sweetAlert();
      })
      .catch((err) => errorAlert(err.message));
  };
  const handleGoogleSignIn = () => {
    return userGoogleSignIn()
      .then(() => sweetAlert())
      .catch((err) => errorAlert(err.message));
  };
  return (
    <div className="card w-11/12 max-w-sm mx-auto my-12 border border-base-300 bg-base-100 shadow-xl rounded-3xl">
      <div className="card-body space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-500">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
          Please log in to continue
        </p>

        <form onSubmit={handleLoginWithEmail} className="space-y-3">
          <div>
            <label className="label text-sm font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="label text-sm font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
            <div className="text-right mt-1">
              <a className="text-xs text-blue-500 hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>
          </div>

          <button className="btn bg-blue-500 w-full mt-3">Login</button>
        </form>

        <div className="divider text-xs text-gray-500 dark:text-gray-400">
          OR
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full border border-gray-300 bg-white dark:bg-base-100 text-black dark:text-white hover:border-blue-500"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Google logo"
          >
            <path
              fill="#4285f4"
              d="M478.5 250.2c0-17.5-1.4-35-4.4-51.9H256v98.2h126.2c-5.4 29.3-21.8 54.1-46.6 70.5l75.3 58.7c43.9-40.6 68.6-100.3 68.6-175.5z"
            />
            <path
              fill="#34a853"
              d="M256 512c62.1 0 114.3-20.6 152.4-55.8l-75.3-58.7c-20.9 14-47.5 22.3-77.1 22.3-59.4 0-109.8-40.2-127.8-94.2l-78 60.1c36.9 73.2 113.1 126.3 205.8 126.3z"
            />
            <path
              fill="#fbbc04"
              d="M128.2 325.6c-9.4-27.6-9.4-57.5 0-85.1l-78-60.1c-33.7 66.6-33.7 143.8 0 210.4l78-60.1z"
            />
            <path
              fill="#ea4335"
              d="M256 102.4c35.6 0 67.7 12.3 92.9 36.4l69.6-69.6C390.3 24.8 327.1 0 256 0 163.3 0 87.1 53.1 50.2 126.3l78 60.1c18-54 68.4-94 127.8-94z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-2">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
