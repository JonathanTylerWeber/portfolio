import React, { useState, useRef, useEffect } from 'react';
import MagnetLink from './MagnetLink';
import useHeaderVisibility from '../components/useHeaderVisibility';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './N2.css';

function N2() {
  const isHeaderVisible = useHeaderVisibility();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [hideToggle, setHideToggle] = useState(window.innerWidth >= 992);
  const [shouldShrink, setShouldShrink] = useState(false);
  const [hasExpandedOnce, setHasExpandedOnce] = useState(false);

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

  useEffect(() => {
    if (isHeaderVisible && hasExpandedOnce) {
      setShouldAnimate(false);
      setShouldShrink(true);
      const timer = setTimeout(() => {
        setHideToggle(true);
      }, 300);
      return () => clearTimeout(timer);
    } else if (!isHeaderVisible) {
      setShouldAnimate(true);
      setShouldShrink(false);
      if (!hasExpandedOnce) {
        setHasExpandedOnce(true);
      }
      setHideToggle(false);
    }
  }, [isHeaderVisible, hasExpandedOnce]);

  const isLargeScreen = window.innerWidth >= 992;
  const toggleButtonClass = `${!isHeaderVisible && isLargeScreen ? 'animate' : ''} ${shouldShrink && isHeaderVisible && isLargeScreen ? 'shrink' : ''} ${hideToggle && isLargeScreen ? 'hide-toggle' : ''}`;


  useEffect(() => {
    if (shouldAnimate && isLargeScreen) {
      const timer = setTimeout(() => setShouldAnimate(false), 300); // duration of the expand animation
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, isLargeScreen]);

  useEffect(() => {
    if (shouldShrink && isHeaderVisible && isLargeScreen) {
      const timer = setTimeout(() => setShouldShrink(false), 300);
      return () => clearTimeout(timer);
    }
  }, [shouldShrink, isHeaderVisible, isLargeScreen]);

  return (
    <>
      <div className='nav-lg'>
        <div className='left-link'>
          <MagnetLink>
            <a href='' className='lg-link'>Jonathan Weber</a>
          </MagnetLink>
        </div>
        <div className='right-links'>
          <MagnetLink>
            <a href='' className='lg-link'>About</a>
          </MagnetLink>
          <br />
          <MagnetLink>
            <a href='' className='lg-link'>Contact</a>
          </MagnetLink>
        </div>
      </div>
      <div id="navbar-container" className={`navbar-container ${isOpen ? 'open' : ''}`}>

        <MagnetLink>
          <button className={`toggle-button ${toggleButtonClass}`} onClick={toggleNavbar}>
            <FontAwesomeIcon
              icon={faEllipsis}
              className={`icon ${isOpen ? 'rotate-left' : 'rotate-right'}`}
            />
          </button>
        </MagnetLink>
        <div className={`navbar ${isOpen ? 'open' : ''}`}>

          <div className='list'>
            <p className='navigation'>Navigation</p>
            <hr className="horizontal-line" />
            <MagnetLink>
              <a href='' className='link'>Jonathan Weber</a>
            </MagnetLink>
            <br />
            <MagnetLink>
              <a href='' className='link'>About</a>
            </MagnetLink>
            <br />
            <MagnetLink>
              <a href='' className='link'>Contact</a>
            </MagnetLink>
          </div>

          <div className='nav-foot'>
            <MagnetLink>
              <a href=''>
                <FontAwesomeIcon icon={faGithub} className='foot-link' />
              </a>
            </MagnetLink>
            <MagnetLink>
              <a href=''>
                <FontAwesomeIcon icon={faLinkedin} className='foot-link' />
              </a>
            </MagnetLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default N2;
