import React, { useState, useEffect, useRef, lazy, Suspense, memo } from 'react';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useScroll, useTransform } from 'framer-motion';
import './Footer.css';

const MagnetLink = lazy(() => import('./MagnetLink'));

const Footer = () => {
  const githubLink = 'https://github.com/JonathanTylerWeber';
  const linkedInLink = 'https://www.linkedin.com/in/jonathantweber/';

  const [chinaTime, setChinaTime] = useState('');

  useEffect(() => {
    const updateChinaTime = () => {
      const options = { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit' };
      const formatter = new Intl.DateTimeFormat([], options);
      setChinaTime(formatter.format(new Date()));
    };

    updateChinaTime();
    const interval = setInterval(updateChinaTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-1000, 0])

  return (
    <div className='footer' style={{ y }} ref={container}>
      <div className='footer-body'>
        <Container className='foot-container'>
          <div className='foot-title'>
            <div className='img-container'>
              <img alt='' />
            </div>
            <p className='open-work'>Open for work</p>
          </div>
          <a href="mailto:jonathantweber@gmail.com" className='email'>jonathantweber@gmail.com</a>
          <Suspense fallback={<div>Loading...</div>}>
            <MagnetLink>
              <a href='/contact' className='contact-link'>Contact</a>
            </MagnetLink>
          </Suspense>
        </Container>
        <div className='foot'>
          <div className='foot-left'>
            <p className='time'>Local Time: {chinaTime} CST</p>
          </div>
          <div className='foot-right'>
            <Suspense fallback={<div>Loading...</div>}>
              <MagnetLink>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className='footer-link github'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </MagnetLink>
              <MagnetLink>
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className='footer-link'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </MagnetLink>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
