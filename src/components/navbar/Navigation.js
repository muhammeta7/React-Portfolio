import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>Muhammet Aydin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link to="" className="navLink">
            <Nav.Link>About Me</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link>Projects</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link>Skills</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link>Education</Nav.Link>
          </Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
