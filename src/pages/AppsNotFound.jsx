import React from "react";
import { Link } from "react-router";

const AppsNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-360px)]  text-center">
        <title>Apps Not Found!</title>

        <h1 className="text-6xl md:text-8xl font-black bg-linear-to-r from-[#B8FF00] via-green-400 to-green-600 text-transparent bg-clip-text animate-pulse">
          Apps Not Found
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 my-4">
          Oops! The Apps you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="btn btn-soft md:text-base btn-success hover:bg-green-800 hover:border-green-800 text-[#B8FF00]"
        >
          Back to Home
        </Link>

        <p className="mt-6 text-sm text-gray-500 italic">
          Maybe it got lost in another universe
        </p>
      </div>
    </div>
  );
};

export default AppsNotFound;
