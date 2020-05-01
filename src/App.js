import React from "react";
import "./App.scss";
import { Router } from "@reach/router";
import AboutMe from "./components/about-me/AboutMe";
import ProjectList from "./components/projects/ProjectList";
import Navigation from "./components/navbar/Navigation";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
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
      path: "/about",
      icon: "ion-ios-information-circle-outline",
    },
    {
      text: "Portfolio",
      path: "/projects",
      icon: "ion-ios-folder",
    },
    {
      text: "Contact",
      path: "/contact",
      icon: "ion-ios-call",
    },
    {
      text: "Education",
      path: "/education",
      icon: "ion-ios-school",
    },
    {
      text: "Skills",
      path: "/skills",
      icon: "ion-ios-git-branch",
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
      <div className="container">
        <Router>
          <AboutMe path="/about" />
          <ProjectList path="/projects" />
          <Contact path="/contact" />
          <Education path="/education" />
        </Router>
      </div>
    </div>
  );
}

export default App;
