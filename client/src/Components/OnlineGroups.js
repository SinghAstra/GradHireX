import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const OnlineGroups = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className="OnlineGroups-container">
      <div
        className={
          "OnlineGroups-header-container" + (lightTheme ? "" : " dark")
        }
      >
        <img
          src="/chat.png"
          className="OnlineGroups-header-icon"
          alt="OnlineGroups-header-icon"
        />
        <p className="OnlineGroups-header-title">Online Groups</p>
      </div>
      <div
        className={
          "OnlineGroups-search-container" + (lightTheme ? "" : " dark")
        }
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
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
      <motion.div
        className={"onlineGroup-container" + (lightTheme ? "" : " dark")}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </motion.div>
    </div>
  );
};

export default OnlineGroups;
