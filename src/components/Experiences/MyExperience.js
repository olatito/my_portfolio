import React, { useState } from "react";
import './MyExperience.css';


function MyExperience(props) {
  return (
    <li className="concept">
      <p>{props.date}</p>
      <h2>{props.title}</h2>
      <p>{props.tools}</p>
      <p>{props.description}</p>
    </li>
  );
}
export default MyExperience;