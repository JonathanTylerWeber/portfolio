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
          </p>
        </div>
        <Marquee text="Jonathan Weber -" />
      </div>
    </>
  );
}

export default Header;