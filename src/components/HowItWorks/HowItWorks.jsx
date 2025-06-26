import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-16 my-12 md:my-8 text-center bg-base-100">
      <h2 className="text-4xl font-bold mb-10 text-blue-600 dark:text-blue-500">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="p-8 bg-white dark:bg-base-100 border border-gray-200 dark:border-base-300 rounded-2xl shadow-md dark:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-500/30 transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-blue-400">
            1. Create Your Profile
          </h3>
          <p className="">
            Sign up and share your living preferences, lifestyle, and budget.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-8 bg-white dark:bg-base-100 border border-gray-200 dark:border-base-300 rounded-2xl shadow-md dark:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-500/30 transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-blue-400">
            2. Match with Roommates
          </h3>
          <p className="">
            Our smart system suggests ideal roommates based on your preferences.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-8 bg-white dark:bg-base-100 border border-gray-200 dark:border-base-300 rounded-2xl shadow-md dark:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-500/30 transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-blue-400">
            3. Connect & Move In
          </h3>
          <p className="">
            Chat securely, finalize agreements, and start your shared living journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
