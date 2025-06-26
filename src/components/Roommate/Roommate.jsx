import React, { use } from 'react';
import RoommateCard from '../RoommateCard/RoommateCard';

const Roommate = ({roommateHomePromise}) => {
    const roommates = use(roommateHomePromise)
    return (
        <div className='w-11/12 mx-auto my-12 md:my-8'>
            <h2 className="text-center text-3xl font-bold mb-6">Featured Roommates Post</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
            {
                roommates.map(roommate=><RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>)
            }
           </div>
        </div>
    );
};

export default Roommate;