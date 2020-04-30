import React from "react";
import "../../styles/project-card.scss";

const ProjectCard = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="/" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Project1</h4>
        <p className="card-text text-secondary">Project Details</p>
      </div>
    </div>
  );
};

export default ProjectCard;
