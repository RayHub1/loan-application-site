import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className="header-container">
          <div>
            <h2>Cash Bay</h2>
          </div>
          <nav>
            <NavLink to="./" className="nav-items">
              Home
            </NavLink>
            <NavLink to="./About" className="nav-items">
              About
            </NavLink>
            <NavLink to="./OurServices" className="nav-items">
              Our Services
            </NavLink>
            <NavLink to="./WhyUs" className="nav-items">
              Why Us
            </NavLink>
            <NavLink to="./Contact" className="nav-items">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
