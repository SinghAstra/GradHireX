import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Welcome from "./Components/Welcome/Welcome";
import ChatArea from "./Components/ChatArea/ChatArea";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Users/Users";
import Groups from "./Components/Groups/Groups";
import CreateGroup from "./Components/Groups/CreateGroup";
import Toast from "./Components/Toast/Toast";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          {user && <Route path="/" element={<Navigate to="/app/welcome" />} />}
          {user && (
            <Route path="app" element={<MainContainer />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="chat/:chatId" element={<ChatArea />} />
              <Route path="users" element={<Users />} />
              <Route path="groups" element={<Groups />} />
              <Route path="create-group" element={<CreateGroup />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          )}

          {/* Route for non-authenticated users */}
          {!user && (
            <>
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </>
          )}

          {/* Redirect to login for unauthorized sub-routes */}
          {!user && <Route path="*" element={<Navigate to="/sign-up" />} />}
        </Routes>
        <Toast />
      </BrowserRouter>
    </div>
  );
};

export default App;
