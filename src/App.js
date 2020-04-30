import React from "react";
import "./App.scss";
import Navigation from "./components/navbar/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/about-me/AboutMe";
import ProjectList from "./components/projects/ProjectList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={AboutMe} exact={true} />
          <Route path="/projects" component={ProjectList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
