import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoney-bill } from "@fortawesome/fontawesome-svg-core";
export default function Card(props) {
  return (
    <div>
      <div className="card">
        {/* <FontAwesomeIcon icon={faMoney - bill} /> */}
        <div className="card-content-div">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <NavLink to="./" className="card-links">
            {props.ClickText}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
