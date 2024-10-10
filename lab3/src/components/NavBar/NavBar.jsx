import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentAvatar } from "../../features/avatar/avatarSlice";
import "./NavBar.css";

const NavBar = () => {
  // TODO: Task 6 - Implement selector
  const avatar = null;

  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <p class="navbar-brand">
          <span className="circle">{avatar || "🚫"}</span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
