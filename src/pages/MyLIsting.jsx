import React, { use} from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import MyListingRow from '../components/MyListingRow/MyListingRow';

const MyLIsting = () => {
    const roommates = useLoaderData();
    const {user} = use(AuthContext)
        const myListingRoommates = roommates.filter(roommate=>roommate.email==user.email)

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
            {myListingRoommates.map((roommate) => (
              <MyListingRow key={roommate._id} roommate={roommate}></MyListingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyLIsting;