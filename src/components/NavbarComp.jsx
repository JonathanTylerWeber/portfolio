import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import MagnetLink from './MagnetLink';
import useHeaderVisibility from '../components/useHeaderVisibility';
import './NavbarComp.css';

function NavbarComp() {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <>
      {isHeaderVisible ? (
        <Navbar expand="lg" fixed="top" className="navbar fixed">
          <Navbar.Toggle aria-controls="basic-navbar-nav " className="ml-auto toggler" />
          <Navbar.Collapse id="basic-navbar-nav ml-auto">
            <Nav>
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" exact="true" href="/">Jonathan Weber</Nav.Link>
              </MagnetLink>
            </Nav>
            <Nav className="ml-auto">
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" href="/">About</Nav.Link>
              </MagnetLink>
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" href="/">Contact</Nav.Link>
              </MagnetLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar expand={false} fixed="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav " className="ml-auto toggler" />
          <Navbar.Collapse id="basic-navbar-nav ml-auto">
            <Nav>
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" exact="true" href="/">Jonathan Weber</Nav.Link>
              </MagnetLink>
            </Nav>
            <Nav className="ml-auto">
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" href="/">About</Nav.Link>
              </MagnetLink>
              <MagnetLink>
                <Nav.Link className="nav-link mx-3" href="/">Contact</Nav.Link>
              </MagnetLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}

export default NavbarComp;
