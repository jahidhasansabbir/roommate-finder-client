import React from "react";
import { NavLink } from "react-router";

const TableRow = ({ roommate }) => {
  const { _id,displayName, title, location, email } = roommate;
  return (
    <tr>
      <th>{title}</th>
      <td> {displayName}
      </td>
      <td>{email}
      </td>
      <td>{location}</td>

      <th>
        <NavLink to={`/details/${_id}`} className="btn bg-blue-700 btn-xs w-18">See more</NavLink>
      </th>
    </tr>
  );
};

export default TableRow;
