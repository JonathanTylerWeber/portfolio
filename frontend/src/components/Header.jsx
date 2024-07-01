import React, { memo, lazy, Suspense, useState, useEffect } from 'react';
import "./Header.css";

import img1 from '../assets/portfolio1.png'

const Marquee = lazy(() => import('../components/Marquee'));

function Header() {

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div
          className='img1-container'
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <img src={img1} className='img1' alt='header picture' />
        </div>

        <div className="title-container">
          <p className="title">
            Junior Full Stack Developer
            <span className="secondary-title">Located in Chengdu, China</span>
          </p>
        </div>
        <Suspense >
          <Marquee text="Jonathan Weber -" />
        </Suspense>
      </div>
    </>
  );
}

export default memo(Header);
