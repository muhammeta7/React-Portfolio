import React from "react";
import "./App.scss";
import Navigation from "./components/navbar/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
