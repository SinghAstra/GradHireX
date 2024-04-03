import React from "react";
import "./styles.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const MainContainer = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
