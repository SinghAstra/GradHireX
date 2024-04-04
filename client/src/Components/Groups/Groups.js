import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsAction } from "../../Redux/actions/groupActions";
import GroupItem from "./GroupItem";

const Groups = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const groups = useSelector((state) => state.group.groups);

  useEffect(() => {
    dispatch(fetchGroupsAction(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="w-full flex h-screen flex-col">
      <div className="flex items-center bg-neutral rounded w-full border-2 border-violet-400 p-0.5">
        <div className="px-3">
          <CiSearch size={32} />
        </div>
        <input
          type="text"
          placeholder="Search group..."
          className="w-full bg-transparent flex-1 p-2 text-white font-mono outline outline-0 focus:outline-0 text-xl "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="p-2 flex-1 overflow-y-scroll">
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {groups.map((group) => (
            <GroupItem group={group} key={group._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Groups;
