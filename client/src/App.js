import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Auth from "./Components/Auth";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import OnlineUsers from "./Components/OnlineUsers";
import OnlineGroups from "./Components/OnlineGroups";
import CreateGroup from "./Components/CreateGroup";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <Routes>
        {/* Routes for authenticated users */}
        {user && (
          <Route path="/" element={<Navigate to="/app/welcome" replace />} />
        )}
        {user && (
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users" element={<OnlineUsers />} />
            <Route path="groups" element={<OnlineGroups />} />
            <Route path="create-group" element={<CreateGroup />} />
          </Route>
        )}

        {/* Route for non-authenticated users */}
        {!user && <Route path="/" element={<Auth />} />}

        {/* Redirect to login for unauthorized sub-routes */}
        {!user && <Route path="app" element={<Navigate to="/" replace />} />}
      </Routes>
    </div>
  );
};

export default App;
