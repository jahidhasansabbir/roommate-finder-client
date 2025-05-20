import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const Details = () => {
    const roommatePost = useLoaderData()
    console.log(roommatePost);
      const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };
    const {displayName,title, email, location, rentAmount, roomType, lifeStyle, availability, description} = roommatePost
    return (
          <div className="card bg-base-100 text-base-content border border-base-200 shadow-xl max-w-xl w-full mx-auto transition-all hover:scale-[1.01]">
      <div className="card-body space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl">{title}</h2>
          <button
            onClick={handleLike}
            className="text-xl text-red-500 hover:scale-110 transition-transform duration-200"
            aria-label="Like button"
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <p><span className="font-semibold">Name:</span> {displayName}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Location:</span> {location}</p>
          <p><span className="font-semibold">Rent:</span> ${rentAmount}</p>
          <p><span className="font-semibold">Room Type:</span> {roomType}</p>
          <p><span className="font-semibold">Lifestyle:</span> {lifeStyle}</p>
          <p><span className="font-semibold">Availability:</span> {availability}</p>
        </div>

        <div className="pt-2">
          <p className="text-sm text-justify">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>

        <div className="card-actions justify-end pt-2">
          <button className="btn btn-primary btn-sm">Contact</button>
        </div>
      </div>
    </div>
    );
};

export default Details;