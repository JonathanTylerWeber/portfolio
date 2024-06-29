import React, { memo, lazy, Suspense } from 'react';
import "./Header.css";

const Marquee = lazy(() => import('../components/Marquee'));

function Header() {
  return (
    <>
      <div className="header">
        <div className="title-container">
          <p className="title">
            Junior Full Stack Web Developer
            <span className="secondary-title">Located in Chengdu, China</span>
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Marquee text="Jonathan Weber -" />
        </Suspense>
      </div>
    </>
  );
}

export default memo(Header);
