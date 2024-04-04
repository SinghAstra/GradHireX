import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/actions/userAction";
import { CiSearch } from "react-icons/ci";
import UserItem from "./UserItem";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsers(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="w-3/4 flex h-screen flex-col">
      <div className="flex items-center bg-neutral w-full border-2 border-violet-400 p-0.5">
        <div className="px-3">
          <CiSearch size={32} />
        </div>
        <input
          type="text"
          placeholder="Search by username or email..."
          className="w-full bg-transparent flex-1 p-2 text-white font-mono outline outline-0 focus:outline-0 text-xl "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="p-2 flex-1 overflow-y-scroll">
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {users.map((user) => (
            <UserItem user={user} key={user._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
