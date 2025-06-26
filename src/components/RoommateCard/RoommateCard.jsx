import React from "react";
import { NavLink } from "react-router"; // ✅ Fix: use 'react-router-dom' not 'react-router'
import { FaMapMarkerAlt } from "react-icons/fa";

const RoommateCard = ({ roommate }) => {
  const { _id, title, description, location } = roommate;

  return (
    <div className="flex flex-col shadow-sm border border-base-300 rounded-lg p-6 w-full h-full">
      {/* Top content grows to fill space */}
      <div className="flex-grow space-y-3">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-sm flex items-center gap-1">
          <FaMapMarkerAlt className="text-blue-500" />
          <span>{location}</span>
        </p>

        <p className="text-sm">{description}</p>
      </div>

      {/* Button sticks to bottom */}
      <NavLink
        to={`/details/${_id}`}
        className="mt-4 btn bg-blue-600 text-white w-full"
      >
        See more
      </NavLink>
    </div>
  );
};

export default RoommateCard;
