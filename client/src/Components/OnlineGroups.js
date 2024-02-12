import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

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
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
      <div className={"onlineGroup-container" + (lightTheme ? "" : " dark")}>
        <div className="onlineGroup-container-icon">T</div>
        <p className="onlineGroup-container-username">Test Group</p>
      </div>
    </div>
  );
};

export default OnlineGroups;
