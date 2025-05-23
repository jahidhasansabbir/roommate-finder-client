import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const { id } = useParams();
  const { user } = use(AuthContext);
  const { displayName, email } = user;
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
      rentAmount,
      roomType,
      lifeStyle,
      availability,
      displayName,
      email,
      description,
      contact,
    };

    fetch(`http://localhost:3000/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roommate),
    })
      .then((res) => res.json())
      .then(() => {
        sweetAlert()
        form.reset();
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
              type="text"
              name="rentAmount"
              className="input w-full"
              placeholder="Enter Rent amount"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Room Type</label>
            <select className="select w-full" name="roomType">
              <option>Single</option>
              <option>Shared</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Lifestyle Preferences</label>
            <select className="select w-full" name="lifeStyle">
              <option>Pets</option>
              <option>Smoking</option>
              <option>Night Owl</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Availability</label>
            <select className="select w-full" name="availability">
              <option>Available</option>
              <option>Not available</option>
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
            placeholder="Write your description..."
          ></textarea>
        </div>
        <button className="btn btn-neutral mt-4">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
