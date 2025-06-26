import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const post = useLoaderData();
  const { id } = useParams();
  const { user } = use(AuthContext);
  const { displayName, email } = user;
  const navigate = useNavigate();
  const sweetAlert = () => {
    Swal.fire({
      title: "Roommate Post Updated!",
      text: "Your roommate post has been successfully updated.",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  const {
    title,
    location,
    rentAmount,
    roomType,
    lifeStyle,
    availability,
    description,
    contact,
  } = post.find((p) => p._id == id);

  const handleUpdateRoommatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const rentAmount = form.rentAmount.value;
    const roomType = form.roomType.value;
    const lifeStyle = form.lifeStyle.value;
    const availability = form.availability.value;
    const description = form.description.value;
    const contact = form.contact.value;
    const roommate = {
      title,
      location,
      rentAmount: parseFloat(rentAmount),
      roomType,
      lifeStyle,
      availability,
      displayName,
      email,
      description,
      contact,
    };

    fetch(`${import.meta.env.VITE_server}/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roommate),
    })
      .then((res) => res.json())
      .then(() => {
        sweetAlert();
        form.reset();
        navigate('dashboard/my-listing')
      });
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <form className="fieldset" onSubmit={handleUpdateRoommatePost}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="label">Title</label>
            <input
              required
              defaultValue={title}
              type="text"
              name="title"
              className="input w-full"
              placeholder="e.g: Looking for a roommate in NYC"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Location</label>
            <input
              required
              defaultValue={location}
              type="text"
              name="location"
              className="input w-full"
              placeholder="e.g: Dhaka, Bangladesh"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Rent Amount</label>
            <input
              required
              defaultValue={rentAmount}
              type="text"
              name="rentAmount"
              className="input w-full"
              placeholder="Enter Rent amount"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Room Type</label>
            <select
              className="select w-full"
              defaultValue={roomType}
              name="roomType"
            >
              <option>Shared</option>
              <option>Single</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Lifestyle Preferences</label>
            <select
              className="select w-full"
              defaultValue={lifeStyle}
              name="lifeStyle"
            >
              <option>Pets</option>
              <option>Smoking</option>
              <option>None-smoker</option>
              <option>Night Owl</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Availability</label>
            <select
              className="select w-full"
              defaultValue={availability}
              name="availability"
            >
              <option>Available</option>
              <option>not available</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Name</label>
            <input
              required
              type="text"
              name="name"
              value={displayName}
              disabled
              className="input w-full"
              placeholder=""
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              disabled
              className="input w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">Contact Info</label>
            <input
              required
              defaultValue={contact}
              type="text"
              name="contact"
              className="input w-full"
              placeholder="e.g., 012345678912"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="label">Description</label>
          <textarea
            className="textarea h-24 w-full"
            name="description"
            required
            defaultValue={description}
            placeholder="Write your description..."
          ></textarea>
        </div>
        <button className="btn btn-neutral mt-4">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
