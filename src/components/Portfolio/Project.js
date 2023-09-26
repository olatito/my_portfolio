import React, { useState } from "react";
import './Project.css';


function Project(props) {
  return (
    <div className="project-card">
        <a href={props.projectLink}>
        <img className="project-img" src={props.image} alt={props.title} />
        </a>
        <p className="project-title">{props.title}</p>
    </div>
  );
}
export default Project;