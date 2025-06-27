import React, { use } from 'react';
import { FaClipboardList } from 'react-icons/fa';

const StatCard = ({ ItemsPromise}) => {
    const ItemsData = use(ItemsPromise)
    const totalItemsCount = ItemsData.length
    return (
         <div className="group relative bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-950 rounded-4xl shadow-2xl p-8 border border-gray-800 transition-transform duration-500 hover:scale-105 hover:shadow-blue-500/30">
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition"></div>
                  <div className="flex flex-col justify-between h-48 relative z-10">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-blue-400 drop-shadow">Total Listing</h2>
                      <FaClipboardList className="text-5xl text-blue-400/90 drop-shadow" />
                    </div>
                    <p className="text-6xl font-extrabold text-right text-gray-100">{totalItemsCount}</p>
                  </div>
                </div>
    );
};

export default StatCard;