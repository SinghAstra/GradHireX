import React from "react";
import "./styles.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "./SelfMessage";
import OtherMessage from "./OtherMessage";

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
      <div className="chatArea-messages">
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
        <SelfMessage />
        <OtherMessage />
      </div>
      <div className="chatArea-input-area">
        <input className="search-box" placeholder="Type Your Message here..." />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
