import React from "react";
import "./toolbar.scss";
import DrawerToggle from "./DrawerToggle";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div>
        <DrawerToggle />
      </div>
      <div className="toolbar-logo">
        <a href="/">Muhammet Aydin</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar-items">
        <ul>
          <li>
            <a href="/">About Me</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
