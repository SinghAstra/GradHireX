import React from "react";
import "./styles.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ChatArea = () => {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <div className="chatArea-header-icon">S</div>
        <div className="chatArea-header-title">Title</div>
        <div className="chatArea-header-online">online</div>
        <div className="chatArea-header-delete-icon">
          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatArea-messages">Chat Area Messages</div>
      <div className="chatArea-input-area">ChatArea Input Area</div>
    </div>
  );
};

export default ChatArea;
