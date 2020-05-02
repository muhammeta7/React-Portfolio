import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import workout from "../../assets/swoleness.png";
import chat from "../../assets/chat.png";

export default class ProjectList extends Component {
  render() {
    return (
      <div className="project-list">
        <div className="project">
          <div className="project-card">
            <ProjectCard imgsrc={workout} />
          </div>
          <div className="project-card">
            <ProjectCard imgsrc={chat} />
          </div>
        </div>
      </div>
    );
  }
}
