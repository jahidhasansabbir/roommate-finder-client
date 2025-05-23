import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Details = () => {
  const roommatePost = useLoaderData();
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
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
    count
  } = roommatePost;

  const [likeCount, setLikeCount] = useState(parseInt(count));

  const handleLike = () => {
    setLiked(true);
     const newCount = parseInt(likeCount) + 1;
     setLikeCount(newCount);
  };

  useEffect(()=>{
    fetch(`https://roommate-finder-server-ashen.vercel.app/count/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({count:likeCount}),
    })
  },[id, likeCount])

  return (
    <div className="card bg-base-100 text-base-content my-8 border border-base-200 shadow-xl max-w-xl w-full mx-auto transition-all">
      <div className="card-body space-y-2">
        <p className="text-center font-medium text-xl">
          {likeCount} people interested in
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
          <div className={user.email == email ? "cursor-not-allowed" : ""}>
            <button
              onClick={handleLike}
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
