import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Software from "./components/Education";
import { Container } from "reactstrap";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container-fluid main">
            <div className="container">
              <NavBar />
              <Landing />
            </div>
          </div>
          <div className="container-fluid about">
            <div className="container">
              <About />
            </div>
          </div>
          <div className="container-fluid education">
            <Container className="h-100">
              <Software />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}
