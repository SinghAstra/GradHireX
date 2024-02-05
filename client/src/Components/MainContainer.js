import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <WorkArea />
    </div>
  );
};

export default MainContainer;
