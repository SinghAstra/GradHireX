import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const OnlineUsers = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className="onlineUsers-container">
      <div
        className={"onlineUsers-header-container" + (lightTheme ? "" : " dark")}
      >
        <img
          src="/chat.png"
          className="onlineUsers-header-icon"
          alt="onlineUsers-header-icon"
        />
        <p className="onlineUsers-header-title">Online Users</p>
      </div>
      <div
        className={"onlineUsers-search-container" + (lightTheme ? "" : " dark")}
      >
        <IconButton className={lightTheme ? "" : " dark"}>
          <Search />
        </IconButton>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="search"
        />
      </div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
      <motion.div
        className={"onlineUser-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </motion.div>
    </div>
  );
};

export default OnlineUsers;
