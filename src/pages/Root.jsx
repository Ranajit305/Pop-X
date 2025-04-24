import React from "react";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm flex flex-col justify-end border border-gray-300 rounded-xl p-6 bg-white shadow-md min-h-[90vh] relative">
        <Link to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </Link>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
        <Link
          to="/signup"
          className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-center text-white font-semibold py-3 rounded-lg transition cursor-pointer"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="w-full mt-3 bg-[#6C25FF4B] hover:bg-[#b99ef6] text-center font-medium py-3 rounded-lg transition cursor-pointer"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Root;
