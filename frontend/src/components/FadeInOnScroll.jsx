import React, { useEffect, useRef, useState, memo } from 'react';
import './FadeInOnScroll.css';

const FadeInOnScroll = ({ children, className = '', delay = 0, threshold = .5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(false);
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
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'fade-in' : 'fade-out'}`}>
      {children}
    </div>
  );
};

export default memo(FadeInOnScroll);
