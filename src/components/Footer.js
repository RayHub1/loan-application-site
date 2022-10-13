import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Footer.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <div className="footer-items-container">
            <div>
              <h2>Cash bay</h2>
            </div>
            <p>
              You need an active UK bank account to allow the money to be
              transferred to you.
            </p>
          </div>
          <div className="footer-items-container">
            <h2>COMPANY</h2>
            <NavLink to="/" className="footer-items">
              Who We Are
            </NavLink>
            <NavLink to="/" className="footer-items">
              Blog
            </NavLink>
            <NavLink to="/" className="footer-items">
              Press
            </NavLink>
            <NavLink to="/" className="footer-items">
              Who We Are
            </NavLink>
          </div>
          <div className="footer-items-container">
            <h2>About</h2>
            <NavLink to="/" className="footer-items">
              How It Works
            </NavLink>
            <NavLink to="/" className="footer-items">
              About Us
            </NavLink>
            <NavLink to="/" className="footer-items">
              Products
            </NavLink>
            <NavLink to="/" className="footer-items">
              Why Us
            </NavLink>
          </div>
          <div className="footer-items-container">
            <h2>PRODUCTS</h2>
            <NavLink to="/" className="footer-items">
              Construction Loans
            </NavLink>
            <NavLink to="/" className="footer-items">
              Equipment Finance
            </NavLink>
            <NavLink to="/" className="footer-items">
              Investment Loans
            </NavLink>
            <NavLink to="/" className="footer-items">
              Commercial Loans
            </NavLink>
          </div>
        </div>
        <hr />
        <div className="copy-right">
          <span>All right reserved &copy; RayHub</span>
        </div>
      </footer>
    </div>
  );
}
