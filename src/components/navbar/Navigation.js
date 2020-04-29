import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="navigation">
      <Navbar.Brand className="nav-items">Muhammet Aydin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="">
            <Nav.Link className="nav-items">About Me</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link className="nav-items">Projects</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link className="nav-items">Skills</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link className="nav-items">Education</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link className="nav-items">Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
