import React, { useState } from "react";
import './MyService.css';


function MyService(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
export default MyService;