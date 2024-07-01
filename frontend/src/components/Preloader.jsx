import React, { useEffect, useState } from 'react';
import './Preloader.css';

const PageTransition = ({ children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [isActive, setIsActive] = useState(true); // Start with isActive true
  const [showTitle, setShowTitle] = useState(false); // State to control title animation

  useEffect(() => {
    const delayChildren = setTimeout(() => {
      setShowChildren(true);
    }, 500);

    const titleDelay = setTimeout(() => {
      setShowTitle(true);
    }, 0);

    const transitionOut = setTimeout(() => {
      setIsActive(false);
    }, 2700); // Slide up transition duration + delay

    return () => {
      clearTimeout(delayChildren);
      clearTimeout(titleDelay);
      clearTimeout(transitionOut);
    };
  }, []);

  return (
    <div>
      <div className={`page-transition ${isActive ? 'active' : ''}`}>
        <p className={`page-title ${showTitle ? 'active' : ''}`}>Hi I'm Jonathan</p>
      </div>
      {showChildren && children}
    </div>
  );
};

export default PageTransition;
