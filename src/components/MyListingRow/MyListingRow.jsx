import React from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const MyListingRow = ({ roommate }) => {
  const { _id, displayName, title, location, email } = roommate;

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <tr>
      <th>{title}</th>
      <td> {displayName}</td>
      <td>{email}</td>
      <td>{location}</td>

      <th className="flex flex-col gap-1">
        <NavLink
          to={`/update/${_id}`}
          className="btn text-white bg-blue-600 btn-xs"
        >
          Update
        </NavLink>
        <button
          onClick={() => handleDeletePost(_id)}
          className="btn text-white bg-red-500 btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyListingRow;
