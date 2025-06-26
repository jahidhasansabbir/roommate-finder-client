import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router";
import TableRow from "../components/TableRow/TableRow";
import Loading from "../pages/Loading";
import RoommateCard from "../components/RoommateCard/RoommateCard";
const BrowseListing = () => {
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const roommates = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  // return (
  //   <div className="w-11/12 mx-auto my-6">
  //     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
  //        {roommates.map((roommate) => (
  //             <RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>
  //           ))}
  //     </div>
  //   </div>
  // );

  const sortedRoommates = [...roommates].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.rentAmount - b.rentAmount
      : b.rentAmount - a.rentAmount;
  });
    return (
    <div className="w-11/12 mx-auto my-6">
      <div className="flex justify-between px-3 items-center mb-4 bg-gray-700 py-3 rounded-full">
        <p>Sorted by Rent Amount</p>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-full"
        >
          <option className="text-black" value="asc">Ascending</option>
          <option className="text-black" value="desc">Descending</option>
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
