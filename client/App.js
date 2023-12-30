import React, { Component } from 'react';
import MainContainer from './components/MainContainer.js'
import "./stylesheets/styles.css";



const App = () => {
    let component;
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
        compoennt = <Project />;
        break;

      case "/contact":
        compoennt = <Contact />;
        break;

      case "/signin":
        component = <Signup />;
        break;
    }

    return (
      <div>
        <MainContainer />
        {component}
      </div>
    );
}

export default App;
