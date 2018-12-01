import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Education from "./components/Education";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="main">
            <div className="container">
              <NavBar />
              <Landing />
            </div>
          </div>
          <div className="about">
            <div className="container">
              <About />
            </div>
          </div>
          <div className="education">
            <div className="container">
              <Education />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
