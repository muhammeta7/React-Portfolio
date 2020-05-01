import React from "react";
import "./side-drawer.scss";

const sideDrawer = (props) => {
  // let drawerClasses = "side-drawer";
  // if (props.show) {
  //   drawerClasses = "side-drawer open";
  // }

  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
