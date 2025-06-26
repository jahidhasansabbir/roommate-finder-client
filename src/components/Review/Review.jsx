import React from "react";

const Review = () => {
  return (
    <div className="py-12 bg-base-100 my-12 md:my-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold  mb-8">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" p-6 rounded-xl">
            <p className=" italic">
              "I found a great roommate within 3 days! The matching system
              really works and the process felt super safe."
            </p>
            <h4 className="mt-4 font-semibold ">— Sarah M.</h4>
          </div>

          <div className=" p-6 rounded-xl ">
            <p className=" italic">
              "This platform helped me find someone with similar habits and work
              hours. It's a total game changer for students."
            </p>
            <h4 className="mt-4 font-semibold ">— Jason T.</h4>
          </div>

          <div className=" p-6 rounded-xl ">
            <p className=" italic">
              "I was nervous at first, but the verification feature made me feel
              secure. I’ve already recommended this to friends!"
            </p>
            <h4 className="mt-4 font-semibold ">— Priya K.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
