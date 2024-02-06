import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const OnlineUsers = () => {
  return (
    <div className="onlineUsers-container">
      <div className="onlineUsers-header-container">
        <img
          src="./chat.png"
          className="onlineUsers-header-icon"
          alt="onlineUsers-header-icon"
        />
        <p className="onlineUsers-header-title">Online Users</p>
      </div>
      <div className="onlineUsers-search-container">
        <IconButton>
          <Search />
        </IconButton>
        <input className="search-box" placeholder="search" />
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
      <div className="onlineUser-container">
        <div className="onlineUser-container-icon">T</div>
        <p className="onlineUser-container-username">Test User</p>
      </div>
    </div>
  );
};

export default OnlineUsers;
