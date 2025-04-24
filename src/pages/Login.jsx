import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm border border-gray-300 rounded-xl p-6 bg-white shadow-md min-h-[90vh]">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Signin to your
        </h1>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">PopX account</h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-purple-600 z-10">
            Email Address
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
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          className={`w-full text-white font-semibold py-3 rounded-lg transition ${email && password? "bg-[#6C25FF] hover:bg-[#5a1fe6] cursor-pointer": "bg-gray-300 cursor-not-allowed"}`}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
