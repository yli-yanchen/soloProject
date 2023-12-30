import React, { Component } from 'react';
import Navigation from './components/Navigation.js'
import "./stylesheets/styles.css";

import Signup from './subpage/Signup.js';
import Home from "./subpage/Home.js";
import About from './subpage/About.js';
import Expertice from './subpage/Expertice.js';
import Project from './subpage/Project.js';
import Contact from './subpage/Contact.js';


const App = () => {
    let component;
    console.log(window.location.pathname);
    switch (window.location.pathname) {
      case "/":
        component = <Home />;
        break;

      case "/about":
        component = <About />;
        break;

      case "/expertice":
        component = <Expertice />;
        break;

      case "/project":
        component = <Project />;
        break;

      case "/contact":
        component = <Contact />;
        break;

      case "/signin":
        component = <Signup />;
        break;
    }

    return (
      <div>
        <Navigation />
        {component}
      </div>
    );
}

export default App;
