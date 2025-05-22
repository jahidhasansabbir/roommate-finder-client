import React, { use, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Details = () => {
  const roommatePost = useLoaderData();
  const { user } = use(AuthContext);
  console.log(roommatePost);
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const {
    displayName,
    title,
    email,
    location,
    rentAmount,
    roomType,
    lifeStyle,
    availability,
    description,
    contact,
  } = roommatePost;
  return (
    <div className="card bg-base-100 text-base-content border border-base-200 shadow-xl max-w-xl w-full mx-auto transition-all">
      <div className="card-body space-y-2">
        <p className="text-center font-medium text-xl">
          {count} people interested in
        </p>
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl">{title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <p>
            <span className="font-semibold">Name:</span> {displayName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {location}
          </p>
          <p>
            <span className="font-semibold">Rent:</span> ${rentAmount}
          </p>
          <p>
            <span className="font-semibold">Room Type:</span> {roomType}
          </p>
          <p>
            <span className="font-semibold">Lifestyle:</span> {lifeStyle}
          </p>
          <p>
            <span className="font-semibold">Availability:</span> {availability}
          </p>
        </div>

        <div className="pt-2">
          <p className="text-sm text-justify">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>

        <div className="card-actions justify-end pt-2">
          <div className={user.email==email&& 'cursor-not-allowed'}>
            <button
              onClick={() => {
                setCount(count + 1);
                setLiked(true);
              }}
              className="btn bg-blue-700 text-white btn-sm"
              disabled={user.email == email}
            >
              Like
            </button>
          </div>
        </div>
        <p className={liked ? "flex" : "hidden"}>
          <span className="font-semibold">Contact Info:</span> {contact}
        </p>
      </div>
    </div>
  );
};

export default Details;
