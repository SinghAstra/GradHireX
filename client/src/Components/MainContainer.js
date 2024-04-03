import React from "react";
import "./styles.css";
import { Outlet } from "react-router-dom";
import Conversations from "./Conversations/Conversations";

const MainContainer = () => {
  return (
    <div className="w-full flex">
      <Conversations />
      <Outlet />
    </div>
  );
};

export default MainContainer;
