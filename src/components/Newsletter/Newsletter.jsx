import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // TODO: Replace with actual API call
    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `You're now subscribed with ${email}`,
    });

    setEmail("");
  };

  return (
    <div className="bg-base-100 my-12 py-10  rounded-xl shadow-md w-11/12  mx-auto mt-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
        Stay Updated with RoomMate Finder
      </h2>
      <p className=" mb-6 max-w-xl mx-auto">
        Subscribe to our newsletter and never miss roommate tips, updates, or offers.
      </p>

      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center  gap-4 px-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-80"
          required
        />
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
