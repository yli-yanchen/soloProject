import React from "react";
import logo from "../../docs/assets/images/logo.png"; 
import Home from "../subpage/Home";

const Navigation = () => {
    return (
      <div className="navContainer">
        <a href="/">
          <img className="logo" src={logo} alt="DEYI Logo" />
        </a>

        <ul className="navbar">
          <li className="navitem">
            <a href="/about">About</a>
          </li>
          <li className="navitem">
            <a href="/expertice">Expertice</a>
          </li>
          <li className="navitem">
            <a href="/project">Project</a>
          </li>
          <li className="navitem">
            <a href="/contact">Contact</a>
          </li>
          <li className="navitem">
            <a href="/signin">Sign In</a>
          </li>
        </ul>
      </div>
    );
};

export default Navigation;
