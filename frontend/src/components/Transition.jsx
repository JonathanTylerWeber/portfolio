// Transition.jsx
import React from "react";
import { useTransition } from "./TransitionProvider";
import "./Transition.css";

function Transition() {
  const { showTransition, pageTitle } = useTransition();

  return (
    <div className={`transition-container ${showTransition ? "" : "hidden"}`}>
      {pageTitle}
    </div>
  );
}

export default Transition;
