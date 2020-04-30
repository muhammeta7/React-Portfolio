import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

export default class CardList extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <ProjectCard />
          </div>
          <div className="col-md-6">
            <ProjectCard />
          </div>
        </div>
      </div>
    );
  }
}
