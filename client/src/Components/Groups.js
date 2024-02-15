import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchGroupsAction } from "../Redux/actions/groupActions";

const Groups = () => {
  const lightTheme = useSelector((state) => state.theme);
  const groups = useSelector((state) => state.group.groups);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupsAction(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="groups-container">
      <div className={"groups-header-container" + (lightTheme ? "" : " dark")}>
        <img
          src="/chat.png"
          className="groups-header-icon"
          alt="groups-header-icon"
        />
        <p className="groups-header-title">Groups</p>
      </div>
      <div className={"groups-search-container" + (lightTheme ? "" : " dark")}>
        <IconButton className={lightTheme ? "" : " dark"}>
          <Search />
        </IconButton>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search groups..."
        />
      </div>
      {groups.map((group) => (
        <motion.div
          className={"group-container" + (lightTheme ? "" : " dark")}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="group-container-icon">{group.chatName[0]}</div>
          <p className="group-container-username">{group.chatName}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Groups;
