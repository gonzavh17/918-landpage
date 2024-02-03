import React from "react";
import "../App.css";
import { BlackReveal } from "../animations/BlackReveal";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <p className="nav-bar-item">Contact</p>
        </BlackReveal>
      </div>
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <p className="nav-bar-item">Specs</p>
        </BlackReveal>
      </div>
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <p className="nav-bar-item">History</p>
        </BlackReveal>
      </div>
    </div>
  );
}

export default NavBar;
