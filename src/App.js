import React from "react";
import "./App.scss";
import Navigation from "./components/navbar/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/about-me/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
