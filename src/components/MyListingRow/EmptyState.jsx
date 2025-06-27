import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';

const EmptyState = ({ message = "Nothing here..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <FaRegSadCry className="text-5xl text-gray-400 mb-4 animate-pulse" />
      <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">{message}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        You haven't created your roommate post yet.
      </p>
    </div>
  );
};

export default EmptyState;
