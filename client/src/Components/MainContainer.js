import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import OnlineUsers from "./OnlineUsers";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      {/* <Welcome /> */}
      {/* <CreateGroup /> */}
      {/* <ChatArea /> */}
      <OnlineUsers />
    </div>
  );
};

export default MainContainer;
