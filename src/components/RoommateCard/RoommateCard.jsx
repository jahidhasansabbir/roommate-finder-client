import React from "react";
import { NavLink } from "react-router";

const RoommateCard = ({roommate}) => {
    const {_id, title, location, availability, displayName, email} = roommate
  return (
    <div className=" shadow-sm border border-base-300 rounded-lg p-6 space-y-3 w-full mx-auto ">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
       <p className=" text-sm">
        <span>Name:</span> {displayName}
      </p>
      <p className="text-sm">
        <span >Location:</span> {location}
      </p>
      <p className="text-sm">
        <span>Availability:</span> {availability}
      </p>
     
      <p className="text-sm">
        <span>Email:</span> {email}
      </p>
      <NavLink to={`/details/${_id}`} className="btn bg-blue-600 text-white">See more</NavLink>
    </div>
  );
};

export default RoommateCard;
