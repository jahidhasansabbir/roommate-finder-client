import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import StatCard from "../../components/Overview/StatCard";
import MyListingCard from "../../components/Overview/MyListingCard";


const Overview = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="relative mx-auto  py-14 space-y-14 text-gray-100 overflow-hidden min-h-screen">
      {/* Background floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="w-11/12 mx-auto space-y-8 lg:space-y-12">
        {/* Greeting */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2 tracking-wide">
              Welcome, {user?.displayName?.split(" ")[0] || "User"}!
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              Dive into your control center. Track your progress with live stats
              below.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-gray-900/40 backdrop-blur-2xl p-5 rounded-3xl border border-gray-800 shadow-inner transition duration-500 hover:scale-105">
            <img
              src={user?.photoURL}
              className="rounded-full h-12 outline-4 outline-gray-700 drop-shadow-md"
            />
            <div>
              <p className="font-semibold text-lg">
                {user?.displayName || "Anonymous"}
              </p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Card */}
          <StatCard></StatCard>

          {/* Card */}
          <MyListingCard></MyListingCard>

          {/* Card */}
          {/* <div className="group relative bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-950 rounded-4xl shadow-2xl p-8 border border-gray-800 transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/30">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition"></div>
          <div className="flex flex-col justify-between h-48 relative z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-400 drop-shadow">Active Listings</h2>
              <FaCheckCircle className="text-5xl text-blue-400/90 drop-shadow" />
            </div>
            <p className="text-6xl font-extrabold text-right text-gray-100">{activeListings}</p>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Overview;
