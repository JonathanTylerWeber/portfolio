import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MagnetLink from './MagnetLink';
import FadeInOnScroll from './FadeInOnScroll';
import './Footer.css';

const Footer = () => {

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

  return (
    <div className='footer'>
      <Container className='foot-container'>
        <FadeInOnScroll>
          <div className='foot-title'>
            <div className='img-container'>
              <img alt='' />
            </div>
            <p className='open-work'>Open for work</p>
          </div>
          <a href="mailto:jonathantweber@gmail.com" className='email'>jonathantweber@gmail.com</a>
          <MagnetLink>
            <a href='' className='contact-link'>Contact</a>
          </MagnetLink>
        </FadeInOnScroll>
      </Container>
      <div className='foot'>
        <div className='foot-left'>
          <p className='time'>Local Time: {chinaTime} CDT</p>
        </div>
        <div className='foot-right'>
          <MagnetLink>
            <a href='' className='footer-link github'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </MagnetLink>
          <MagnetLink>
            <a href='' className='footer-link'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </MagnetLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
