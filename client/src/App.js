import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Auth from "./Components/Auth";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import OnlineUsers from "./Components/OnlineUsers";
import OnlineGroups from "./Components/OnlineGroups";
import CreateGroup from "./Components/CreateGroup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="chat" element={<ChatArea />} />
          <Route path="users" element={<OnlineUsers />} />
          <Route path="groups" element={<OnlineGroups />} />
          <Route path="create-group" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
