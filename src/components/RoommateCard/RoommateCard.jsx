import React from "react";
import { NavLink } from "react-router"; // ✅ Fixed path
import { FaMapMarkerAlt } from "react-icons/fa";

const RoommateCard = ({ roommate }) => {
  const { _id, title, rentAmount, description, location } = roommate;

  return (
    <div className="group flex flex-col justify-between rounded-2xl p-6 shadow-md border border-base-300/90  backdrop-blur-md transition hover:shadow-xl bg-base-200 duration-300">
      
      {/* Title and Description */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold  group-hover:text-blue-500 transition">
          {title}
        </h2>

        <p className="text-sm flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" />
          {location}
        </p>

        <p className="text-sm line-clamp-3">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

      {/* Footer Section */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base font-medium">
          Rent:{" "}
          <span className="text-lg text-blue-500  font-bold">
            ${rentAmount}
          </span>
        </p>

        <NavLink
          to={`/details/${_id}`}
          className="btn btn-sm bg-blue-500 hover:bg-blue-700 text-white px-5 w-full sm:w-auto transition"
        >
          See More
        </NavLink>
      </div>
    </div>
  );
};

export default RoommateCard;
