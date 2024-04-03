import React from "react";
import { CiSearch } from "react-icons/ci";

const SidebarSearch = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="flex items-center m-2 bg-neutral rounded-xl">
      <div className="px-3">
        <CiSearch size={32} />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent flex-1 p-2 text-white font-mono outline outline-0 focus:outline-0 text-xl "
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SidebarSearch;
