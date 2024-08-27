import React, { useEffect, useRef, useState, memo } from 'react';
import './FadeInOnScroll.css';

const FadeInOnScroll = ({ children, className = '', delay = 0, threshold = 0.5 }) => {
  const [hasFadedIn, setHasFadedIn] = useState(false); // Track if the fade-in has occurred
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFadedIn) {
            setTimeout(() => {
              setHasFadedIn(true);
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasFadedIn]);

  return (
    <div ref={ref} className={`${className} ${hasFadedIn ? 'fade-in' : 'fade-out'}`}>
      {children}
    </div>
  );
};

export default memo(FadeInOnScroll);
