import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Software from "./components/Software";
import { Container } from "reactstrap";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container-fluid main no-gutters">
            <Container>
              <Landing />
            </Container>
          </div>
          <div className="container-fluid about no-gutters">
            <Container>
              <About />
            </Container>
          </div>
          <div className="container-fluid software no-gutters">
            <Container>
              <Software />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}
