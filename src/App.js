import React from "react";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
// import About from "./components/About";
import Experience from "./components/Experience";
import Software from "./components/Software";
import Projects from "./components/Projects";
import { Container } from "reactstrap";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <div className="main no-gutters">
          <div id="main-landing" className="container-fluid main-landing no-gutters">
            <Container>
              <Landing />
            </Container>
          </div>
          <div id="experience" className="container-fluid experience no-gutters">
            <Container>
              <Experience />
            </Container>
          </div>
          <div id="software" className="container-fluid software no-gutters">
            <Container>
              <Software />
            </Container>
          </div>
          <div id="projects" className="container-fluid projects no-gutters">
            <Container>
              <Projects />
            </Container>
          </div>
        </div>
      </div>

    );
  }
}
