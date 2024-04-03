import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/actions/userAction";
import { createChatAction } from "../../Redux/actions/chatActions";
import { CiSearch } from "react-icons/ci";
import UserItem from "./UserItem";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsers(searchQuery));
  }, [dispatch, searchQuery]);

  const createChat = (userId) => {
    dispatch(createChatAction(userId));
  };

  return (
    <div className="w-full">
      <div className="flex items-center bg-neutral rounded w-full border-2 border-violet-400 p-0.5">
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
      <div className="p-2">
        <ul className="menu menu-md bg-base-200 w-full rounded-box">
          {users.map((user) => (
            <UserItem user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
