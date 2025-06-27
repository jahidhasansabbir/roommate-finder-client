import React, { use } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import { GeneralContext } from "../../context/GeneralContext/GeneralContext";

const MyListingRow = ({ roommate, setMyListing, myListing }) => {
  const { refetch } = use(GeneralContext);
  const { _id, title, location, rentAmount } = roommate;

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb", // Tailwind blue-600
      cancelButtonColor: "#dc2626", // Tailwind red-600
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = myListing.filter((item) => item._id !== id);
        setMyListing(updatedList);

        fetch(`${import.meta.env.VITE_server}/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            refetch();
            Swal.fire("Deleted!", "Your post has been deleted.", "success");
          });
      }
    });
  };

  return (
    <tr className=" w-full hover:bg-gray-700  transition-all duration-150">
      <td className="px-4 py-3 text-sm text-gray-200 font-medium">{title}</td>
      <td className="px-4 py-3 text-sm text-gray-400">{location}</td>
      <td className="px-4 py-3 text-sm text-gray-400">${rentAmount}</td>
      <td className="px-4 py-3 text-right">
        <div className="flex flex-col gap-2 md:gap-4 lg:flex-row justify-center">
          <NavLink
            to={`/dashboard/update/${_id}`}
            className="px-3 py-1 text-sm font-semibold text-white bg-blue-600 text-center hover:bg-blue-700 rounded-2xl transition duration-150"
          >
            Update
          </NavLink>
          <button
            onClick={() => handleDeletePost(_id)}
            className="px-3 py-1 text-sm font-semibold text-white bg-red-500 text-center hover:bg-red-600 rounded-2xl transition duration-150"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyListingRow;
