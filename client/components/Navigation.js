import React from "react";
import logo from "../../docs/assets/images/logo.png"; 


const Navigation = () => {
    return (
      <div className="navContainer">
        <img className="logo" src={logo} alt="DEYI Logo"/>
        <ul className="navbar">
            <li className="navitem"><a href="/home/about">About</a></li>
            <li className="navitem"><a href="#">Expertice</a></li>
            <li className="navitem"><a href="#">Project</a></li>
            <li className="navitem"><a href="#">Contact</a></li>
            <li className="navitem"><a href="#">Sign In</a></li>
        </ul>

      </div>
    );
};

export default Navigation;
