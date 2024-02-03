import React from "react";
import "../App.css";
import { BlackReveal } from "../animations/BlackReveal";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <a href="#specs" className="nav-bar-item">Specs</a>
        </BlackReveal>
      </div>
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <a href="#performance" className="nav-bar-item">Performance</a>
        </BlackReveal>
      </div>
      <div className="nav-bar-item_container">
        <BlackReveal backgroundColor="#fff">
          <a href="#history" className="nav-bar-item">History</a>
        </BlackReveal>
      </div>
    </div>
  );
}

export default NavBar;
