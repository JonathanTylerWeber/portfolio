import React, { useEffect, useRef, cloneElement } from "react";
import gsap from "gsap";
import { Power4, Elastic } from "gsap/all";

function MagnetLink({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugins and easing
    gsap.registerPlugin(Power4, Elastic);

    const container = containerRef.current;
    const magnets = container.children;

    Array.from(magnets).forEach(magnet => {
      magnet.addEventListener('mousemove', moveMagnet);
      magnet.addEventListener('mouseleave', resetMagnet);
    });

    function moveMagnet(event) {
      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = 50; // Adjust strength as needed

      gsap.to(magnetButton, 1.5, {
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut // Use Power4 easing
      });
    }

    function resetMagnet(event) {
      const magnetButton = event.currentTarget;
      gsap.to(magnetButton, 1.5, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut // Use Elastic easing
      });
    }

    return () => {
      Array.from(magnets).forEach(magnet => {
        magnet.removeEventListener('mousemove', moveMagnet);
        magnet.removeEventListener('mouseleave', resetMagnet);
      });
    };
  }, [children]);

  // Clone the children to apply ref to each of them
  const clonedChildren = React.Children.map(children, child =>
    cloneElement(child, { ref: containerRef })
  );

  return <div ref={containerRef}>{clonedChildren}</div>;
}

export default MagnetLink;
