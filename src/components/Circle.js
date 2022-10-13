import React from "react";
import "../CSS/Home.css";

export default function Circle(props) {
  return (
    <div>
      <div className="homepage-second-section-items-div">
        <div className="ekpe">
          <h2>{props.digit}</h2>
        </div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
