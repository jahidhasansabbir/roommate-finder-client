import React from 'react';
import { NavLink, Outlet } from "react-router";
import {
  FiMenu,
  FiHome,
  FiFolder,
  FiMail,
  FiBell,
  FiMapPin,
  FiBarChart2,
} from "react-icons/fi";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open bg-base-100 text-white">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ✅ Main Content */}
      <div className="drawer-content flex flex-col">
        {/* ✅ Top navbar (Mobile) */}
        <div className="w-full navbar shadow-md  text-white lg:hidden z-10">
          <div className="flex-1 px-4 text-xl font-bold">Dashboard</div>
          <div className="flex-none">
            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost text-white">
              <FiMenu className="w-6 h-6" />
            </label>
          </div>
        </div>

        {/* ✅ Page Content */}
        <div className=" min-h-screen  text-white">
          <Outlet />
        </div>
      </div>

      {/* ✅ Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside className="menu p-4 w-64 min-h-full  border-r border-gray-700 text-white bg-base-100 space-y-1">
          <h2 className="text-2xl font-bold mb-4 px-2">Menu</h2>
          <li>
            <NavLink to='/' className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiHome className="text-lg" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiMapPin className="text-lg" /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to='dashboard/add-to-find-roommate' className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiFolder className="text-lg" /> Add Roommate
            </NavLink>
          </li>
          <li>
            <NavLink to='dashboard/browse-listing' className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiBell className="text-lg" /> Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink to='dashboard/my-listing' className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiBell className="text-lg" /> My Listing
            </NavLink>
          </li>
          
          <li>
            <a className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-3 py-2">
              <FiBarChart2 className="text-lg" /> Graph
            </a>
          </li>
        </aside>
      </div>
    </div>
    );
};

export default Dashboard;