import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import Conversations from "../Conversations/Conversations";

const Sidebar = () => {
  return (
    <div className="bg-violet-400 h-screen w-1/3 flex flex-col">
      <SidebarHeader />
      <SidebarSearch />
      <Conversations />
    </div>
  );
};

export default Sidebar;
