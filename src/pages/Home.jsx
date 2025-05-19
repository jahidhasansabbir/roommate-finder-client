import React from "react";
import Slider from "../components/Slider/Slider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* extra sections */}
      <HowItWorks></HowItWorks>
      <Review></Review>
    </div>
  );
};

export default Home;
