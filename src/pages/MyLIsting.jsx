import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import MyListingRow from "../components/MyListingRow/MyListingRow";
import EmptyState from "../components/MyListingRow/EmptyState";

const MyListing = () => {
  const roommates = useLoaderData();
  const { user } = useContext(AuthContext);

  const myListingRoommates = roommates.filter(
    (roommate) => roommate.email === user.email
  );
  const [myListing, setMyListing] = useState(myListingRoommates);

  return (
    <div className="w-11/12 mx-auto my-8">
      {myListing.length === 0 ? (
        <EmptyState message="No listings found!" />
      ) : (
        <div className="overflow-x-auto mx-auto shadow-2xl ring-1 ring-base-100 ring-opacity-30 backdrop-blur-md bg-base-200 rounded-lg">
          <table className="text-sm sm:text-base w-full border-separate overflow-x-scroll border-spacing-0 rounded-lg">
            <thead>
              <tr className="bg-blue-600 shadow-md">
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase rounded-tl-lg">
                  Title
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase">
                  Location
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-white uppercase">
                  Rent
                </th>
                <th className="px-4 sm:px-6 py-4 text-right font-semibold text-white uppercase rounded-tr-lg">
                  {/* For Actions */}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-300">
              {myListing.map((roommate) => (
                <MyListingRow
                  key={roommate._id}
                  setMyListing={setMyListing}
                  myListing={myListing}
                  roommate={roommate}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListing;
