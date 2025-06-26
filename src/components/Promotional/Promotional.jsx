import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Promotional = () => {
    const {user} = use(AuthContext)
  return (
    <div className="w-11/12 bg-base-300 mx-auto my-12 md:my-8 rounded-xl shadow-md p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">
        Ready to Find Your Perfect Roommate?
      </h2>
      <p className=" max-w-xl mx-auto mb-6">
        RoomMate Finder helps you match with compatible roommates based on preferences, location, and lifestyle. Join thousands finding their ideal match!
      </p>
      <NavLink to={user ? '/browse-listing':'/login'} className="btn bg-blue-500 text-white px-6">
        Get Started
      </NavLink>
    </div>
  );
};

export default Promotional;
