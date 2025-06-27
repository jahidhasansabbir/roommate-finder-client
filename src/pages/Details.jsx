import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaBed,
  FaHeart,
  FaPhoneAlt,
  FaUser,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

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
    count,
  } = roommatePost;

  const [likeCount, setLikeCount] = useState(parseInt(count) || 0);

  const handleLike = () => {
    setLiked(true);
    const newCount = likeCount + 1;
    setLikeCount(newCount);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_server}/count/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: likeCount }),
    });
  }, [id, likeCount]);

  return (
    <section className="w-full  bg-gradient-to-br from-blue-50 dark:from-gray-900 via-white dark:via-gray-800 to-blue-100 dark:to-gray-900 py-10 px-4 transition-all duration-300">
      <div className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-white">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <FaHeart className="inline-block text-blue-500 mr-1" />
            {likeCount} people are interested
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800 dark:text-gray-200">
          <InfoItem icon={<FaUser />} label="Name" value={displayName} />
          <InfoItem icon={<FaEnvelope />} label="Email" value={email} />
          <InfoItem icon={<FaMapMarkerAlt />} label="Location" value={location} />
          <InfoItem icon={<FaDollarSign />} label="Rent" value={`$${rentAmount}`} />
          <InfoItem icon={<FaBed />} label="Room Type" value={roomType} />
          <InfoItem icon={<FaCheckCircle />} label="Lifestyle" value={lifeStyle} />
          <InfoItem icon={<FaCheckCircle />} label="Availability" value={availability} />
        </div>

        {/* Description */}
        <div className="bg-blue-50/70 dark:bg-gray-800 p-4 rounded-xl border border-blue-100 dark:border-gray-700 text-sm">
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            <span className="font-semibold text-blue-800 dark:text-white">Description:</span> {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
          <button
            onClick={handleLike}
            className="btn btn-sm bg-blue-500 flex items-center gap-1 px-6"
            disabled={user.email === email}
          >
            {liked ? "Liked" : "Like this post"}
          </button>

          {liked && (
            <p className="text-sm flex items-center gap-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-lg">
              <FaPhoneAlt /> <span className="font-medium">Contact:</span> {contact}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// Reusable Info Item
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-3 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
    <span className="text-blue-600 dark:text-blue-400 text-base">{icon}</span>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Details;
