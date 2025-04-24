import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm bg-white shadow-md rounded-xl min-h-[90vh] overflow-hidden flex flex-col justify-between">
        <div>
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Account Settings
            </h2>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-4 mb-4 relative">
              <div className="relative w-16 h-16">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 bg-purple-600 p-0.5 rounded-full border-2 border-white">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 5a2 2 0 012-2h2l1-1h4l1 1h2a2 2 0 012 2v2h-2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V7H2V5h2zm6 3a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Marry Doe</p>
                <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          <div className="border-t border-dashed border-gray-300 w-full"></div>
        </div>

        <div className="border-t border-dashed border-gray-300 w-full mb-10"></div>
      </div>
    </div>
  );
};

export default Profile;
