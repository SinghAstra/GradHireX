import React from "react";
import "./styles.css";
import { Outlet } from "react-router-dom";
import Conversations from "./Conversations/Conversations";

const MainContainer = () => {
  return (
    <div className="w-full flex flex-1">
      <Conversations />
      <Outlet />
    </div>
  );
};

export default MainContainer;
