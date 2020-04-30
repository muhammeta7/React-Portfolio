import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import workout from "../../assets/homepage.png";
import chat from "../../assets/chat.png";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <ProjectCard imgsrc={workout} />
          </div>
          <div className="col-md-6">
            <ProjectCard imgsrc={chat} />
          </div>
        </div>
      </div>
    );
  }
}
