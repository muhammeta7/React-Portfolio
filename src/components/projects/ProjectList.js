import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import workout from "../../assets/homepage.png";
import chat from "../../assets/chat.png";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        <div className="row">
          <div className="col-md-6 space">
            <ProjectCard imgsrc={workout} />
          </div>
          <div className="col-md-6 space">
            <ProjectCard imgsrc={chat} />
          </div>
        </div>
      </div>
    );
  }
}
