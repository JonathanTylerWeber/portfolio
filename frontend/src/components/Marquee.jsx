import { useRef, useEffect, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import './Marquee.css'

function Marquee() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1.25;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (slider.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }
  };

  return (
    <div className='sliderContainer'>
      <div ref={slider} className='slider'>
        <p ref={firstText}>Jonathan Weber - </p>
        <p ref={secondText}>Jonathan Weber - </p>
        <p ref={thirdText}>Jonathan Weber - </p>
      </div>
    </div>
  );
}

export default memo(Marquee)
