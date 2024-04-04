import { Button, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  exitGroupChatAction,
  fetchGroupsAction,
  joinGroupChatAction,
} from "../Redux/actions/groupActions";

const Groups = () => {
  const lightTheme = useSelector((state) => state.theme);
  const groups = useSelector((state) => state.group.groups);
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroupsAction(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="groups-container">
      <div className={"groups-header-container"}>
        <img
          src="/chat.png"
          className="groups-header-icon"
          alt="groups-header-icon"
        />
        <p className="groups-header-title">Groups</p>
      </div>
      <div className={"groups-search-container"}>
        <IconButton className={lightTheme ? "" : " dark"}>
          <Search />
        </IconButton>
        <input
          className={"search-box"}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search groups..."
        />
      </div>
      {groups.map((group) => (
        <motion.div
          className={"group-container"}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          key={group._id}
        >
          <div className="group-container-icon">{group.chatName[0]}</div>
          <p className="group-container-username">{group.chatName}</p>
          <div className="group-container-button">
            {group.users.some((user) => user._id === currentUserId) ? (
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(exitGroupChatAction(group._id))}
              >
                Exit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => dispatch(joinGroupChatAction(group._id))}
              >
                Join
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Groups;
