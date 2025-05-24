import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import TableRow from "../components/TableRow/TableRow";
import Loading from "../pages/Loading";
const BrowseListing = () => {
  const roommates = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="w-11/12 mx-auto my-6">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {roommates.map((roommate) => (
              <TableRow key={roommate._id} roommate={roommate}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListing;
