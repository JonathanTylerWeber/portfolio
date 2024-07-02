import { useRef, memo, lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useScroll, useTransform, motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import './AboutBody.css'
import useIsMobile from '../hooks/useIsMobile';

const MagnetLink = lazy(() => import("./MagnetLink"));
const FadeInOnScroll = lazy(() => import("./FadeInOnScroll"));

import musicVideo from '../assets/music-video.mp4'
import portfolio2 from '../assets/portfolio2.jpg'

const AboutBody = () => {
  const isMobile = useIsMobile();

  const resumeUrl = 'https://docs.google.com/document/d/1FdGl1zHjkR-HkZEZqROrZZ6rKJrNylbvb7j1Tk-y6HU/edit?usp=sharing'

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })

  const height = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <>
      <div className="about-body-container" ref={container}>
        <div className="about-content">
          <Container>
            <Suspense>
              {isMobile ? (
                <>
                  <h1 className="about-name">About Me</h1>
                </>
              ) : (
                <FadeInOnScroll threshold={.05}>
                  <h1 className="about-name">About Me</h1>
                </FadeInOnScroll>
              )}
            </Suspense>
            <Row className="about-container">
              <Col lg={6} className="blurb-container">
                <Suspense>
                  {isMobile ? (
                    <p className="about-blurb">
                      Born in Los Angeles I moved to Chengdu, China in 2018. Over the years I worked as an English Teacher and did Freelance Audio Recording and Engineering. Eventually I met my wife and when we decided to move back to the United States in 2023, I decided to start learning programming to secure a future for us. Now having completed the Springboard Software Engineering Bootcamp and currently in the long visa process for my wife, we plan on arriving in the US in early 2025. I'm looking for a remote position for now so that I can stay with the love of my life and when the time comes to finally move, I'm open to relocating for a position.
                    </p>
                  ) : (
                    <FadeInOnScroll threshold={.05}>
                      <p className="about-blurb">
                        Born in Los Angeles I moved to Chengdu, China in 2018. Over the years I worked as an English Teacher and did Freelance Audio Recording and Engineering. Eventually I met my wife and when we decided to move back to the United States in 2023, I decided to start learning programming to secure a future for us. Now having completed the Springboard Software Engineering Bootcamp and currently in the long visa process for my wife, we plan on arriving in the US in early 2025. I'm looking for a remote position for now so that I can stay with the love of my life and when the time comes to finally move, I'm open to relocating for a position.
                      </p>
                    </FadeInOnScroll>
                  )}
                </Suspense>
              </Col>
              <Col lg={6} >
                <div className="img2-container">
                  <Suspense>
                    {isMobile ? (
                      <img src={portfolio2} alt='picture of jonathan' className="img2" />
                    ) : (
                      <FadeInOnScroll threshold={.05}>
                        <img src={portfolio2} alt='picture of jonathan' className="img2" />
                      </FadeInOnScroll>
                    )}
                  </Suspense>
                </div>
              </Col>
            </Row>

            <Suspense>
              {isMobile ? (
                <div className="resume-container">
                  <MagnetLink>
                    <a href={resumeUrl} className="resume" target="_blank" rel="noopener noreferrer">
                      <span>
                        Resume
                        <FontAwesomeIcon className="resume-link" icon={faLink} />
                      </span>
                    </a>
                  </MagnetLink>
                </div>
              ) : (
                <FadeInOnScroll threshold={.05}>
                  <div className="resume-container">
                    <MagnetLink>
                      <a href={resumeUrl} className="resume" target="_blank" rel="noopener noreferrer">
                        <span>
                          Resume
                          <FontAwesomeIcon className="resume-link" icon={faLink} />
                        </span>
                      </a>
                    </MagnetLink>
                  </div>
                </FadeInOnScroll>
              )}
            </Suspense>

            <Suspense>
              {isMobile ? (
                <p className="about-me">
                  When I'm not programming I spend time with our 4 cats, playing DND with friends, and frequenting the nearby bouldering gym in Chengdu. Also for the past 10 years I have been making and producing my own music and videos. I've always been passionate about music whether it be playing jazz and funk or producing electronic music and hip hop. Over the past couple of years I've also learned much about video recording and editing and have been incorporating that with music. Whether it be programming or music, I'm always trying to learn new things to push myself and gain new creative tools.
                </p>
              ) : (
                <FadeInOnScroll threshold={.05}>
                  <p className="about-me">
                    When I'm not programming I spend time with our 4 cats, playing DND with friends, and frequenting the nearby bouldering gym in Chengdu. Also for the past 10 years I have been making and producing my own music and videos. I've always been passionate about music whether it be playing jazz and funk or producing electronic music and hip hop. Over the past couple of years I've also learned much about video recording and editing and have been incorporating that with music. Whether it be programming or music, I'm always trying to learn new things to push myself and gain new creative tools.
                  </p>
                </FadeInOnScroll>
              )}
            </Suspense>

            <div className="video-container">
              <video controls className="video">
                <source src={musicVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


          </Container>
        </div>
        <motion.div style={{ height }} className='circleContainer-about'>
          <div className='circle-about'></div>
        </motion.div>
      </div>
    </>
  )
}

export default memo(AboutBody)