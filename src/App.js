import React from "react";
import "./App.scss";
import ToolBar from "./components/navbar/ToolBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/about-me/AboutMe";
import ProjectList from "./components/projects/ProjectList";
import SideDrawer from "./components/navbar/SideDrawer";

function App() {
  return (
    <Router>
      <div className="App" style={{ height: "100%" }}>
        <ToolBar />
        <SideDrawer />
        <Switch>
          <Route path="/" component={AboutMe} />
          <Route path="/projects" component={ProjectList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
