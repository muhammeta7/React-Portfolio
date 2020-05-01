import React from "react";
import "./toolbar.scss";
import DrawerToggle from "./DrawerToggle";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggle click={props.drawerClickHandler} />
      </div>
      <div />
      <div className="toolbar__logo">
        <a href="/">Muhammet Aydin</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
      </div>
    </nav>
  </header>
);

export default toolbar;
