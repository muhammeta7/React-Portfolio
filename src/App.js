import React, { Component } from "react";
import "./App.scss";
import ToolBar from "./components/navbar/ToolBar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AboutMe from "./components/about-me/AboutMe";
// import ProjectList from "./components/projects/ProjectList";
import SideDrawer from "./components/navbar/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
      sideDrawer = <SideDrawer />;
    }

    return (
      <div style={{ height: "100%" }}>
        <ToolBar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
