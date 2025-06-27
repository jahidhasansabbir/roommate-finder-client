import React, { use } from 'react';
import { MdPostAdd } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';

const MyListingCard = ({ItemsPromise}) => {
    const allListing = use(ItemsPromise)
    const {user} = use(AuthContext)
    const myListing = allListing.filter(roommate=>roommate.email==user.email)
    const myItemsCount = myListing.length
    return (
        <div className="group relative bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-950 rounded-4xl shadow-2xl p-8 border border-gray-800 transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/30">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition"></div>
          <div className="flex flex-col justify-between h-48 relative z-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-400 drop-shadow">My Listing</h2>
              <MdPostAdd className="text-5xl text-blue-400/90 drop-shadow" />
            </div>
            <p className="text-6xl font-extrabold text-right text-gray-100">{myItemsCount}</p>
          </div>
        </div>
    );
};

export default MyListingCard;