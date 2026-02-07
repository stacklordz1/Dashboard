import React from "react";

const TopBar = () => {
  return (
    <div className="border-b mb-4 mt-2 px-4 pb-4 border-stone-300">
      <div className="flex justify-between items-center p-1">

        {/* Greeting Section */}
        <div>
          <h1 className="text-xl font-bold ">Hey, Festus!</h1>
          <p className="text-sm text-stone-500">Welcome to your dashboard</p>
        </div>

        {/* Status Section */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <p className="text-sm text-stone-300 font-medium">Status:</p>
            <span className="relative flex h-2 w-2">
              {/* Glowing pulse */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-500">Active</span>
          </div>

          {/* Timestamp */}
          <p className="text-xs text-stone-400 italic">Created 2 days ago</p>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
