import React from "react";
import "./styles.css";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendIcon from "@mui/icons-material/Send";
import SelfMessage from "./SelfMessage";
import OtherMessage from "./OtherMessage";
import { useSelector } from "react-redux";

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className="chatArea-container">
      <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
        <div className="chatArea-header-icon">S</div>
        <div className="chatArea-header-title">Title</div>
        <div className="chatArea-header-online">online</div>
        <div className="chatArea-header-delete-icon">
          <IconButton className={lightTheme ? "" : " dark"}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className={"chatArea-messages" + (lightTheme ? "" : " dark")}>
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
      <div className={"chatArea-input-area" + (lightTheme ? "" : " dark")}>
        <input
          className={"search-box" + (lightTheme ? "" : " dark")}
          placeholder="Type Your Message here..."
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
// box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
