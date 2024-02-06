import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import "./styles.css";

const OnlineGroups = () => {
  return (
    <div className="OnlineGroups-container">
      <div className="OnlineGroups-header-container">
        <img
          src="./chat.png"
          className="OnlineGroups-header-icon"
          alt="OnlineGroups-header-icon"
        />
        <p className="OnlineGroups-header-title">Online Groups</p>
      </div>
      <div className="OnlineGroups-search-container">
        <IconButton>
          <Search />
        </IconButton>
        <input className="search-box" placeholder="search" />
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className="onlineGroup-container">
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
    </div>
  );
};

export default OnlineGroups;
