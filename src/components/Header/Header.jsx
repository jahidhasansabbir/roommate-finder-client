import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user,logOut } = use(AuthContext);
  const li = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-to-find-roommate">Add to Find Roommate</NavLink>
      </li>
      <li>
        <NavLink to="/browse-listing">Browse Listing</NavLink>
      </li>
      <li>
        <NavLink to="/my-listing">My Listings</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="md:hidden">
          Log in
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="md:hidden">
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn pl-0 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {li}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          <span>Roommate</span>
          <span className="-ml-1.5 text-blue-500">Finder</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
            <button
              onClick={() => {
                logOut()
                .then(()=>{
                  console.log('logout');
                })
              }}
              className="btn text-white bg-blue-600 ml-2"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-blue-600 ml-2 hidden md:flex"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-blue-600 ml-2 hidden md:flex"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
