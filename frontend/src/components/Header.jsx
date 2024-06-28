import React from "react";
import "./Header.css";
import Marquee from "./Marquee";

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
        <Marquee text="Jonathan Weber -" />
      </div>
    </>
  );
}

export default Header;
