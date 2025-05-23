import React, { use, useState} from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import MyListingRow from '../components/MyListingRow/MyListingRow';

const MyLIsting = () => {
    const roommates = useLoaderData();
    const {user} = use(AuthContext)
        const myListingRoommates = roommates.filter(roommate=>roommate.email==user.email)
        const [myListing, setMyListing] = useState(myListingRoommates) 

    return (
        <div className="w-11/12 mx-auto">
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
            {myListing.map((roommate) => (
              <MyListingRow key={roommate._id} setMyListing={setMyListing} myListing={myListing} roommate={roommate}></MyListingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyLIsting;