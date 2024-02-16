import { DoneOutlineRounded } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { createGroupChatAction } from "../Redux/actions/chatActions";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../Redux/actions/userAction";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [userIds, setUserIds] = useState([]);
  const lightTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const individualChats = useSelector((state) =>
    state.chat.chats.filter((chat) => chat.isGroupChat === false)
  );
  const currentUserId = useSelector((state) => state.user.currentUser._id);
  const otherUsers = individualChats.map((individualChat) => {
    return individualChat.users.find((user) => user._id !== currentUserId);
  });
  const [showUserSelection, setShowUserSelection] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (userId) => {
    if (userIds.includes(userId)) {
      setUserIds(userIds.filter((id) => id !== userId));
    } else {
      setUserIds([...userIds, userId]);
    }
  };

  const handleCreateGroup = () => {
    // Check if group name is not empty
    if (!groupName.trim()) {
      alert("Group name cannot be empty.");
      return;
    }
    setShowUserSelection(true);
  };

  const handleSubmit = () => {
    // Send the group name and user IDs to the backend
    dispatch(createGroupChatAction(groupName, userIds));
    navigate("/app/welcome");
  };

  return (
    <div className={"createGroup-container" + (lightTheme ? "" : " dark")}>
      {!showUserSelection && (
        <div className="createGroup-input">
          <input
            placeholder="Enter Group Name"
            className={"search-box" + (lightTheme ? "" : " dark")}
            value={groupName}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                handleCreateGroup();
              }
            }}
            onChange={(e) => setGroupName(e.target.value)}
          />
          <IconButton
            className={lightTheme ? "" : " dark"}
            onClick={handleCreateGroup}
          >
            <ArrowCircleRightRoundedIcon className="icon" />
          </IconButton>
        </div>
      )}
      {showUserSelection && (
        <>
          <div className="createGroup-header-container">
            <div className="cg-header-label">
              <img
                src="/chat.png"
                className="create-group-header-icon"
                alt="createGroups-header-icon"
              />
              <h3>Select Users</h3>
            </div>
            <IconButton onClick={handleSubmit} disabled={userIds.length === 0}>
              <DoneOutlineRounded className="icon" />
            </IconButton>
          </div>
          {otherUsers.map((user) => (
            <motion.div
              key={user._id}
              className="user-container"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Checkbox
                checked={userIds.includes(user._id)}
                onChange={() => handleCheckboxChange(user._id)}
              />
              <div className="user-container-icon">{user.name[0]}</div>
              <p className="user-container-username">{user.name}</p>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

export default CreateGroup;
