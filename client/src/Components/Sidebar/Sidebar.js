import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import Conversations from "../Conversations/Conversations";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="bg-violet-400 h-screen w-1/3 flex flex-col">
      <SidebarHeader />
      <SidebarSearch setSearchQuery={setSearchQuery} />
      <Conversations searchQuery={searchQuery} />
    </div>
  );
};

export default Sidebar;
