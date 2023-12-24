import React from "react";
import logo from "../../docs/assets/images/logo.png"; 


const Navigation = () => {
    return (
      <div>
        <img className="logo" src={logo} alt="DEYI Logo"/>
        <ul className="navbar">
            <li><a href="/about">About</a></li>
            <li><a href="#">Expertice</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sign In</a></li>
        </ul>
      </div>
    );
};

export default Navigation;
