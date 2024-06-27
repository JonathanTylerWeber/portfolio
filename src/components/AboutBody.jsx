import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useScroll, useTransform, motion } from 'framer-motion';
import './AboutBody.css'

import FadeInOnScroll from "./FadeInOnScroll";
import MagnetLink from "./MagnetLink";

import musicVideo from '../assets/music-video.mp4'

const AboutBody = () => {

  const resumeUrl = 'https://docs.google.com/document/d/1gcY15Gp0LkJKRnDAGYcn8hFg87OrcA7yVgZgSTvw7vM/edit?usp=sharing'

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <>
      <div className="body-container" ref={container}>
        <div className="about-content">
          <Container>
            <FadeInOnScroll threshold={.05}>
              <h1 className="about-name">About Me</h1>
            </FadeInOnScroll>
            <Row>
              <Col lg={6} >
                <FadeInOnScroll threshold={.05}>
                  <p className="about-blurb">
                    Born in Los Angeles I moved to Chengdu, China in 2018. Over the years I worked as an English Teacher and did Freelance Audio Recording and Engineering. Eventually I found my wife and when we decided to move back to the United States in 2023, I decided to start learning programming to secure a future for us. Now having completed the Springboard Software Engineering Bootcamp and currently in the long visa process for my wife, we plan on arriving in the US in early 2025. I'm looking for a remote position for now so that I can stay with the love of my life and when the time comes to finally move, I'm open to relocating for a position.
                  </p>
                </FadeInOnScroll>
              </Col>
              <Col lg={6} >
                <FadeInOnScroll threshold={.05}>
                  <img alt='picture of jonathan' />
                </FadeInOnScroll>
              </Col>
            </Row>


            <FadeInOnScroll threshold={.05}>
              <div className="resume-container">
                <MagnetLink>
                  <a href={resumeUrl} className="resume" target="_blank" rel="noopener noreferrer">
                    Take a look at my resume
                  </a>
                </MagnetLink>
              </div>
            </FadeInOnScroll>


            <FadeInOnScroll threshold={.05}>
              <p className="about-me">
                When I'm not programming I spend time cuddling with our 4 cats, playing DND with friends, and frequenting the nearby bouldering gym in Chengdu. Also for the past 10 years I have been making and producing my own music and videos. I've always been passionate about music whether it be playing jazz and funk or producing electronic music and hip hop. Over the past couple of years I've also learned much about video recording and editing and have been incorporating that with music. Whether it be programming or music, I'm always trying to learn new things to push myself and gain new creative tools.
              </p>
            </FadeInOnScroll>

            {/* <FadeInOnScroll> */}
            <div className="video-container">
              <video controls className="video">
                <source src={musicVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* </FadeInOnScroll> */}



          </Container>
        </div>
        <motion.div style={{ height }} className='circleContainer-about'>
          <div className='circle-about'></div>
        </motion.div>
      </div>
    </>
  )
}

export default AboutBody