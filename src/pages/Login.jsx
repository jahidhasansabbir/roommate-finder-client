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
    navigate('/')
  };
   const errorAlert=(msg)=>{
      Swal.fire({
        title: "Error!",
        text: `${msg}`,
        icon: "error",
        showConfirmButton: true,
      });
    }
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
    <div className="card bg-base-100 w-11/12 border my-10 border-base-300 max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-2xl font-bold md:text-4xl">Log in now!</h1>
        <form onSubmit={handleLoginWithEmail} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className="text-center text-gray-400">or,</p>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
      <p className="text-center pb-4">
        Haven't an account?{" "}
        <NavLink to="/register">
          <span className="text-blue-700 hover:underline">Register</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
