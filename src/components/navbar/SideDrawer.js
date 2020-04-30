import React from "react";
import "./SideDrawer.scss";

const sideDrawer = (props) => (
  <nav className="side-drawer">
    <ul>
      <li>
        <a href="/">About Me</a>
      </li>
      <li>
        <a href="/">Projects</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
