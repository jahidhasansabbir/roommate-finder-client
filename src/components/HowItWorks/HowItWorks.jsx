import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-10 my-12 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <div className="p-6 shadow-lg rounded-lg border border-base-300">
          <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
          <p>
            Sign up and share your living preferences, lifestyle, and budget.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border border-base-300">
          <h3 className="text-xl font-semibold mb-2">
            2. Match with Roommates
          </h3>
          <p>
            Our smart system suggests ideal roommates based on your preferences.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg border border-base-300">
          <h3 className="text-xl font-semibold mb-2">3. Connect & Move In</h3>
          <p>
            Chat securely, finalize agreements, and start your shared living
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
