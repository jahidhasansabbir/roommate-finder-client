import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import Loading from "../pages/Loading";
import RoommateCard from "../components/RoommateCard/RoommateCard";
const BrowseListing = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const roommates = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const sortedRoommates = [...roommates].sort((a, b) => {
    return sortOrder === "asc"
      ? a.rentAmount - b.rentAmount
      : b.rentAmount - a.rentAmount;
  });
  return (
    <div className="w-11/12 mx-auto my-6">
      <div className="flex justify-between items-center mb-6 px-4 py-3 rounded-full bg-base-200 border border-base-300 shadow-sm">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Sorted by <span className="text-blue-500">Rent Amount</span>
        </p>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-sm md:select-md rounded-full bg-white dark:bg-base-100 border border-gray-300 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className="text-black dark:text-white" value="asc">
            Ascending
          </option>
          <option className="text-black dark:text-white" value="desc">
            Descending
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {sortedRoommates.map((roommate) => (
          <RoommateCard key={roommate._id} roommate={roommate} />
        ))}
      </div>
    </div>
  );
};

export default BrowseListing;
