import { React, useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import MagnetLink from './MagnetLink';
import useHeaderVisibility from '../components/useHeaderVisibility';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import './NavbarComp.css';

function NavbarComp() {
  const isHeaderVisible = useHeaderVisibility();

  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const closeNavbar = () => {
    setNavbarExpanded(false);
  };

  return (
    <>
      {isHeaderVisible ? (
        <Navbar expand="lg" fixed="top" className={`navbar fixed ${isHeaderVisible ? 'header-visible' : ''} ${navbarExpanded ? 'navbar-expanded' : ''}`}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto toggler">
            <FontAwesomeIcon icon={faEllipsis} className="icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
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
        <Navbar expand={false} fixed="top" className={`${navbarExpanded ? 'navbar-expanded' : ''}`}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto toggler ">
            <FontAwesomeIcon icon={faEllipsis} className="icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
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
