import React, { useState, useEffect, memo, lazy, Suspense } from 'react';
import { Link } from "react-router-dom";
import { useScroll, motion, } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './NavbarComp.css';

const MagnetLink = lazy(() => import('./MagnetLink'));

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

  const scrollToProjects = () => {
    const projectsElement = document.getElementById('recent');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className='nav-lg' style={{ backgroundColor: backgroundColor, '--hover-color': hoverColor }}>
        <div className='left-link'>
          <Suspense >
            <MagnetLink>
              <Link to='/' className='lg-link' onClick={location.pathname === '/' ? scrollToProjects : undefined} >Jonathan Weber</Link>
            </MagnetLink>
          </Suspense>
        </div>
        <div className='right-links'>
          <Suspense >
            <MagnetLink>
              <Link to='/about' className='lg-link'>About</Link>
            </MagnetLink>
          </Suspense>
          <br />
          <Suspense >
            <MagnetLink>
              <Link to='/contact' className='lg-link'>Contact</Link>
            </MagnetLink>
          </Suspense>
        </div>
      </div>
      <div id="navbar-container" className={`navbar-container ${isOpen ? 'open' : ''}`}>
        {isLargeScreen && (
          <Suspense >
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
          </Suspense>
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
            <Suspense >
              <MagnetLink>
                <Link to='/' className='link' onClick={location.pathname === '/' ? scrollToProjects : undefined}>Jonathan Weber</Link>
              </MagnetLink>
            </Suspense>
            <br />
            <Suspense >
              <MagnetLink>
                <Link to='/about' className='link'>About</Link>
              </MagnetLink>
            </Suspense>
            <br />
            <Suspense >
              <MagnetLink>
                <Link to='/contact' className='link'>Contact</Link>
              </MagnetLink>
            </Suspense>
          </div>
          <div className='nav-foot'>
            <Suspense >
              <MagnetLink>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className='foot-link' />
                </a>
              </MagnetLink>
            </Suspense>
            <Suspense >
              <MagnetLink>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className='foot-link' />
                </a>
              </MagnetLink>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(NavbarComp);
