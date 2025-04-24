import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm border border-gray-300 rounded-xl p-6 bg-white shadow-md flex flex-col justify-between min-h-[90vh]">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your</h1>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            PopX account
          </h1>

          <div className="relative mb-6 mt-6">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative mb-6">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
              Company name
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-5">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  className="accent-purple-600 w-5 h-5"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  className="accent-purple-600 w-5 h-5"
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button
          className={`mt-4 w-full text-white font-semibold py-3 rounded-lg transition 
        ${ name && number && email && password && company && isAgency
            ? "bg-[#6C25FF] hover:bg-[#5a1fe6] cursor-pointer"
            : "bg-gray-300 cursor-not-allowed"
        }`}
          disabled={ !name || !number || !email || !password || !company || !isAgency }
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
