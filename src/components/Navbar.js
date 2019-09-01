import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import Resume from '../assets/resume.pdf'
import '../styles/Navbar.css'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar
          className="fixed-top"
          id="nav-main"
          style={{ backgroundColor: "#282828" }}
          dark
          expand="md"
          role="navigation"
        >
          <NavbarBrand href="/portfolio">Anthony Campos</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#software">Software</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem id="resume">
                <Button
                  className="landing-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={Resume}
                  color="warning"
                  size="md"
                >
                  <i className="solid fas fa-file-pdf fa-1x" /> Resume
          </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
