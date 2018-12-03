import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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
        <Navbar color="faded" dark expand="md" role="navigation">
          <NavbarBrand href="/">Anthony Campos</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} exact to="/about" activeClassName="active">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/education" activeClassName="active">
                  Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/experience" activeClassName="active">
                  Experience
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects" activeClassName="active">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/skills" activeClassName="active">
                  Skills
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
