import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap"
import './NavbarComp.css'

function NavbarComp() {


  return (

    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav>
            <Nav.Link className="nav-link mx-3" exact='true' href="/">Jonathan Weber</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="nav-link mx-3" href="/">About</Nav.Link>
            <Nav.Link className="nav-link mx-3" href='/'>Contact</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar >

  );
}

export default NavbarComp;