import React from "react";
import Slider from "../components/Slider/Slider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Review from "../components/Review/Review";
import Roommate from "../components/Roommate/Roommate";
import Newsletter from "../components/Newsletter/Newsletter";
import Promotional from "../components/Promotional/Promotional";

const roommateHomePromise = fetch(`${import.meta.env.VITE_server}/home`).then((res) =>
  res.json()
);

const Home = () => {
  // console.log(import.meta.VITE_vercel);
  return (
    <div className=" my-8">
      <div className="flex justify-between items-center w-11/12 shadow mx-auto border border-base-300 bg-base-300  py-2 px-3 rounded-full -mt-1 mb-4">
        <h2 className="text-lg">Theme</h2>
        

        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="light"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Slider></Slider>
      <Roommate roommateHomePromise={roommateHomePromise}></Roommate>
      {/* extra sections */}
      <HowItWorks></HowItWorks>
      <Review></Review>
      <Promotional></Promotional>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
