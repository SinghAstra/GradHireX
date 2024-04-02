import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  const isSignUpPage = location.pathname === "/sign-up";
  const buttonText = isSignUpPage ? "Log In" : "Sign Up";
  const buttonUrl = isSignUpPage ? "/log-in" : "/sign-up";

  return (
    <div className="flex font-mono justify-between items-center py-4 px-6 shadow-lg bg-black text-white w-full z-10">
      <div>
        <h1 className="text-2xl text-violet-400  font-semibold">
          <Link to={"/"}>Chat Web App</Link>
        </h1>
      </div>
      <div>
        {user ? (
          <Link className="avatar placeholder" to="/app/profile">
            <div className="bg-neutral text-neutral-content rounded-full w-12 border-2 border-purple-400">
              <span className="text-2xl">{user.username[0]}</span>
            </div>
          </Link>
        ) : (
          <Link
            className="bg-black rounded-2xl py-2 px-4 border bottom-2 border-violet-400 hover:bg-violet-400 hover:text-black"
            to={buttonUrl}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
