import React from "react";
import { NavLink} from "react-router";
const TableRow = ({ item }) => {
  const { _id, title, location, rentAmount } = item;

  return (
    <tr className="hover:bg-blue-500/10 transition-colors duration-300 rounded-xl">
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap font-medium text-gray-100">{title}</td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-400 break-all">{location}</td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-400">${rentAmount}</td>
      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
       <NavLink
          to={`/details/${_id}`}
          className="btn btn-sm bg-blue-500 rounded-2xl hover:bg-blue-700 text-white px-5 w-full sm:w-auto transition"
        >
          See More
        </NavLink>
      </td>
    </tr>
  );
};

export default TableRow;