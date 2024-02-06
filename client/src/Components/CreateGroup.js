import { DoneOutlineRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./styles.css";

const CreateGroup = () => {
  return (
    <div className="createGroup-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineRounded />
      </IconButton>
    </div>
  );
};

export default CreateGroup;
