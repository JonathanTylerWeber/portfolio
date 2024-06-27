import React, { useState, useRef, useEffect } from 'react';
import { useScroll, motion, } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './NavbarComp.css';

import MagnetLink from './MagnetLink';

function NavbarComp({ backgroundColor, hoverColor }) {

  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(scrollY.get());
    };

    updateScrollPosition();

    const scrollListener = scrollY.on("change", updateScrollPosition);

    return () => {
      scrollListener();
    };
  }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const githubLink = 'https://github.com/JonathanTylerWeber';
  const linkedInLink = 'https://www.linkedin.com/in/jonathantweber/';

  const toggleNavbar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    const navbarRef = document.getElementById('navbar-container');
    if (navbarRef && !navbarRef.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const buttonOpacity = isLargeScreen && scrollPosition > window.innerHeight ? 1 : (!isLargeScreen ? 1 : 0);
  const buttonScale = isLargeScreen && scrollPosition > window.innerHeight ? 1 : (!isLargeScreen ? 1 : 0);

  return (
    <>
      <div className='nav-lg' style={{ backgroundColor: backgroundColor, '--hover-color': hoverColor }}>
        <div className='left-link'>
          <MagnetLink>
            <a href='/' className='lg-link'>Jonathan Weber</a>
          </MagnetLink>
        </div>
        <div className='right-links'>
          <MagnetLink>
            <a href='/about' className='lg-link'>About</a>
          </MagnetLink>
          <br />
          <MagnetLink>
            <a href='/' className='lg-link'>Contact</a>
          </MagnetLink>
        </div>
      </div>
      <div id="navbar-container" className={`navbar-container ${isOpen ? 'open' : ''}`}>
        {isLargeScreen && (
          <MagnetLink>
            <motion.button
              className={`toggle-button ${buttonOpacity ? 'visible' : ''}`}
              onClick={toggleNavbar}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: buttonScale, opacity: buttonOpacity }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FontAwesomeIcon
                icon={faEllipsis}
                className={`icon ${isOpen ? 'rotate-left' : 'rotate-right'}`}
              />
            </motion.button>
          </MagnetLink>
        )}
        {!isLargeScreen && (
          <button className={`toggle-button `} onClick={toggleNavbar}>
            <FontAwesomeIcon
              icon={faEllipsis}
              className={`icon ${isOpen ? 'rotate-left' : 'rotate-right'}`}
            />
          </button>
        )}
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className='list'>
            <p className='navigation'>Navigation</p>
            <hr className="horizontal-line" />
            <MagnetLink>
              <a href='/' className='link'>Jonathan Weber</a>
            </MagnetLink>
            <br />
            <MagnetLink>
              <a href='/about' className='link'>About</a>
            </MagnetLink>
            <br />
            <MagnetLink>
              <a href='' className='link'>Contact</a>
            </MagnetLink>
          </div>
          <div className='nav-foot'>
            <MagnetLink>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='foot-link' />
              </a>
            </MagnetLink>
            <MagnetLink>
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className='foot-link' />
              </a>
            </MagnetLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComp;
