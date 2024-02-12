import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

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
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className={"onlineUser-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
    </div>
  );
};

export default OnlineUsers;
