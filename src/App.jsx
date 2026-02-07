import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/DashBoard/Dashboard";

const App = () => {
  return (
    <div
      className="
        min-h-screen
        bg-gray-600
        p-4
        grid
        gap-4
        grid-cols-1
        md:grid-cols-[200px_1fr]
      "
    >
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
