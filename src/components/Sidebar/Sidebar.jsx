import React from "react";
import AccountToggle from "../Sidebar/AccountToggle";
import Search from "../Sidebar/Search";
import RouteSelect from "../Sidebar/RouteSelect";
import Plan from "../Sidebar/Plan";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4">
      
      {/* Main Sidebar */}
      <div className="
        sticky top-4
        h-[calc(100vh-5rem)]
        overflow-y-auto
        rounded-xl
        bg-neutral-900
        p-4
        text-white
        shadow-lg
        scrollbar-thin
      ">
        <AccountToggle />
        <Search />
        <RouteSelect />
      <Plan />  
      </div>

      
    </aside>
  );
};

export default Sidebar;
