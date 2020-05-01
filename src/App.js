import React from "react";
import "./App.scss";
import { Router } from "@reach/router";
import AboutMe from "./components/about-me/AboutMe";
import ProjectList from "./components/projects/ProjectList";
import Navigation from "./components/navbar/Navigation";
import logo from "./logo.svg";

function App() {
  const navLinks = [
    {
      text: "Home",
      path: "/home",
      icon: "ion-ios-home",
    },
    {
      text: "AboutMe",
      path: "/aboutme",
      icon: "ion-ios-business",
    },
    {
      text: "ProjectList",
      path: "/projects",
      icon: "ion-ios-briefcase",
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "ion-ios-megaphone",
    },
    {
      text: "Education",
      path: "/education",
      icon: "ion-ios-briefcase",
    },
  ];

  return (
    <div className="App">
      <Navigation
        navLinks={navLinks}
        logo={logo}
        background="#fff"
        hoverBackground="#34384B"
        linkColor="#777"
      />
      <Router>
        <AboutMe path="/aboutme" />
        <ProjectList path="/projects" />
      </Router>
    </div>
  );
}

export default App;
