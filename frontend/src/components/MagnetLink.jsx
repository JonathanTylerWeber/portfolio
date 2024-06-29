import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

const MagnetLink = ({ children }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnetButton = magnetRef.current;

    const moveMagnet = (event) => {
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = 75;

      gsap.to(magnetButton, {
        duration: 1.5,
        x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: '0.001deg',
        ease: 'power4.out'
      });
    };

    const resetMagnet = () => {
      gsap.to(magnetButton, {
        duration: 1.5,
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)'
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
};

export default memo(MagnetLink);
