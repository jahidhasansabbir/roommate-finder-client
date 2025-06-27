import React, { use, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { userGoogleSignIn, createUserWithEmailPass, updateUserInfo } =
    use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sweetAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
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
  const handleSignUpWithEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    const profileInfo = { name, photoUrl };
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    } else if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    } else {
      createUserWithEmailPass(email, password)
        .then(() => {
          updateUserInfo(profileInfo);
          sweetAlert();
        })
        .catch((err) => errorAlert(err.message));
    }
  };
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then(() => {
        sweetAlert();
      })
      .catch((err) => errorAlert(err.message));
  };
  return (
    <div className="max-w-md w-11/12 mx-auto mt-12 mb-8 bg-base-200 border border-base-300 rounded-2xl shadow-2xl overflow-hidden">
  <div className="p-8">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-500">Create Your Account</h1>

    <form onSubmit={handleSignUpWithEmail} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="input input-bordered w-full mt-1 bg-base-100 text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input input-bordered w-full mt-1 bg-base-100 text-white"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="input input-bordered w-full mt-1 bg-base-100 text-white"
          placeholder="Enter password"
        />
      </div>

      <div>
        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-300">Photo URL</label>
        <input
          type="text"
          name="photoUrl"
          id="photoUrl"
          className="input input-bordered w-full mt-1 bg-base-100 text-white"
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      <div className="text-right">
        <a href="#" className="text-sm text-blue-400 hover:underline">Forgot password?</a>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 w-full mt-2">
        Register
      </button>
    </form>

    <div className="divider text-sm text-gray-400 mt-6 mb-4">or</div>

    <button
      onClick={handleGoogleSignIn}
      className="btn w-full bg-base-100 text-white border border-white hover:shadow-md transition"
    >
      <svg
        aria-label="Google logo"
        width="20"
        height="20"
        className="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <g>
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
        </g>
      </svg>
      Continue with Google
    </button>
  </div>

  <div className="text-center text-sm text-gray-400 border-t border-base-300 p-4">
    Already have an account?{" "}
    <NavLink to="/login" className="text-blue-400 hover:underline font-medium">Log in</NavLink>
  </div>
</div>

  );
};

export default Register;
