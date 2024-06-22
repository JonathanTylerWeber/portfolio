import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power4, Elastic } from "gsap/all";

function MagnetLink({ children, }) {
  const magnetRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Power4, Elastic);

    const magnetButton = magnetRef.current;

    const moveMagnet = (event) => {
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = 100; // Adjust strength as needed

      gsap.to(magnetButton, 1.5, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
      });
    };

    const resetMagnet = () => {
      gsap.to(magnetButton, 1.5, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
      });
    };

    magnetButton.addEventListener('mousemove', moveMagnet);
    magnetButton.addEventListener('mouseleave', resetMagnet);

    return () => {
      magnetButton.removeEventListener('mousemove', moveMagnet);
      magnetButton.removeEventListener('mouseleave', resetMagnet);
    };
  }, []);

  return React.cloneElement(children, {
    ref: magnetRef
  });
}

export default MagnetLink;
