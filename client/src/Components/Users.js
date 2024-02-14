import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchUsers } from "../Redux/actions/userAction";

const Users = () => {
  const lightTheme = useSelector((state) => state.theme);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsers(searchQuery));
  }, [dispatch, searchQuery]);
  return (
    <div className="users-container">
      <div className={"users-header-container" + (lightTheme ? "" : " dark")}>
        <img
          src="/chat.png"
          className="users-header-icon"
          alt="users-header-icon"
        />
        <p className="users-header-title">Users</p>
      </div>
      <div className={"users-search-container" + (lightTheme ? "" : " dark")}>
        <IconButton className={lightTheme ? "" : " dark"}>
          <Search />
        </IconButton>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="search username or email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {users.map((user) => (
        <motion.div
          key={user._id}
          className="user-container"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="user-container-icon">{user.name[0]}</div>
          <p className="user-container-username">{user.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Users;
