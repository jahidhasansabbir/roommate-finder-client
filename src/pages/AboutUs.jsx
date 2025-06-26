import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import roommateImg from "../assets/image.png"
const AboutUs = () => {
  return (
    <div className="w-11/12 py-12  mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">About Us</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          RoomMate Finder is your go-to platform for finding the perfect roommate. Whether you're moving to a new city or just need someone reliable to share space with — we've got you covered.
        </p>
      </div>

      {/* Main Section: Text left, Image right */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-base-300 shadow-xl rounded-xl overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={roommateImg}
            alt="Roommates"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">Making Co-Living Simple</h2>
          <p className="mt-3 text-gray-400">
            We connect people based on lifestyle, habits, and compatibility — not just location. Our platform makes it easy to find someone you’ll actually enjoy living with.
          </p>

          <p className="mt-3 text-gray-400">
            Built with modern technology and real community input, RoomMateHub is here to make shared living stress-free, secure, and social.
          </p>

          {/* Optional: Social icons if it's a founder/team card */}
          <div className="flex justify-center md:justify-start gap-4 mt-5 text-xl text-blue-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
