import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentAvatar } from "../../features/avatar/avatarSlice";
import "./NavBar.css";

const NavBar = () => {
  // TODO: Task 6 - Implement selector
  const avatar: string | null = null;

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <p className="navbar-brand">
          <span className="circle">{avatar || "🚫"}</span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
