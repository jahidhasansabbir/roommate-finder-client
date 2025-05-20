import React from "react";
import Slider from "../components/Slider/Slider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Review from "../components/Review/Review";
import Roommate from "../components/Roommate/Roommate";

const roommatePromise = fetch('http://localhost:3000/roommate').then(res=>res.json())
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Roommate roommatePromise={roommatePromise}></Roommate>
      {/* extra sections */}
      <HowItWorks></HowItWorks>
      <Review></Review>
    </div>
  );
};

export default Home;
