import { DoneOutlineRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

const CreateGroup = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className={"createGroup-container" + (lightTheme ? "" : " dark")}>
      <input
        placeholder="Enter Group Name"
        className={"search-box" + (lightTheme ? "" : " dark")}
      />
      <IconButton className={lightTheme ? "" : " dark"}>
        <DoneOutlineRounded />
      </IconButton>
    </div>
  );
};

export default CreateGroup;
