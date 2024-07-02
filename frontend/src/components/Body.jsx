import { useRef, memo, lazy, Suspense } from "react";
import "./Body.css";
import { Container, Row, Col } from "react-bootstrap";
import { useScroll, useTransform, motion } from 'framer-motion';
import { Link } from "react-router-dom";
import useIsMobile from '../hooks/useIsMobile';

import proseVid from '../assets/proseVid.mp4'
import translateVid from '../assets/translateVid.mp4'

import proseImg from '../assets/prosePerfector.png'
import translateImg from '../assets/translate.png'

const MagnetLink = lazy(() => import("./MagnetLink"));
const Project = lazy(() => import("./Project"));
const FadeInOnScroll = lazy(() => import("./FadeInOnScroll"));

function Body() {

  const isMobile = useIsMobile();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <>
      <div className="body-container" ref={container}>
        <div className="content">
          <Container>
            <Row>
              <Col lg={8}>
                <Suspense fallback={null}>
                  {isMobile ? (
                    <p className="blurb">
                      Dedicated to creating impactful web applications that merge design, functionality, and seamless user interaction. With a strong foundation in both front-end and back-end technologies, I specialize in developing intuitive, responsive, and efficient web apps.
                    </p>
                  ) : (
                    <FadeInOnScroll threshold={0.05}>
                      <p className="blurb">
                        Dedicated to creating impactful web applications that merge design, functionality, and seamless user interaction. With a strong foundation in both front-end and back-end technologies, I specialize in developing intuitive, responsive, and efficient web apps.
                      </p>
                    </FadeInOnScroll>
                  )}
                </Suspense>
              </Col>
              <Col lg={4} className="about-link-container">
                <Suspense fallback={null}>
                  {isMobile ? (
                    <Link to="/about" className="about-link">{'< aboutMe />'}</Link>
                  ) : (
                    <FadeInOnScroll threshold={0.05}>
                      <MagnetLink>
                        <Link to="/about" className="about-link">{'< aboutMe />'}</Link>
                      </MagnetLink>
                    </FadeInOnScroll>
                  )}
                </Suspense>
              </Col>
            </Row>
            <Suspense fallback={null}>
              {isMobile ? (
                <>
                  <p id="recent" className="recent">Recent Projects</p>
                  <Project
                    img={proseImg}
                    video={proseVid}
                    alt={'prose website'}
                    projName={'Prose Perfector'}
                    projDesc={"Prose Perfector is a web application designed to enhance the writing skills of its users using OpenAI's API. It offers a seamless experience where writers can securely sign up, submit their writing pieces for evaluation, and receive detailed feedback. Key features include the ability to specify the type of writing and desired style, obtaining ratings, and receiving a rewritten version of their text for clarity and style improvement. Users can manage their profiles, view submission history, and benefit from robust authentication and password security measures."}
                    tech={'React, React Bootstrap, Vite, Node.js, Express, PostgreSQL, OpenAI API, ViteTest, Jest, JWT (jsonwebtoken, jwt-decode), bcrypt, jsonschema, axios, Font Awesome'}
                    projLink={'https://capstone-2-cetn.onrender.com/'}
                    gitLink={'https://github.com/JonathanTylerWeber/capstone-2'}
                  />
                  <Project
                    img={translateImg}
                    video={translateVid}
                    alt={'translate website'}
                    projName={'Translate Web App'}
                    projDesc={"The Translate Web App is a comprehensive tool designed for seamless translation between English and Chinese languages. Utilizing the Google Cloud Translate API, users can input text to receive accurate translations along with phonetic spellings (pinyin). Key features include user authentication, translation history management, saving and unsaving of translations, and password reset functionality."}
                    tech={'HTML, CSS, Bootstrap, JavaScript, Flask (Python), PostgreSQL, Google Cloud Translate, Flask-DebugToolbar, Flask-Bcrypt, Xpinyin, Mailjet, Python-dotenv, Jinja, Font Awesome'}
                    projLink={'https://translate-e40f.onrender.com/'}
                    gitLink={'https://github.com/JonathanTylerWeber/capstone-1'}
                  />
                </>
              ) : (
                <>
                  <FadeInOnScroll threshold={0.05}>
                    <p id="recent" className="recent">Recent Projects</p>
                  </FadeInOnScroll>
                  <FadeInOnScroll threshold={0.05}>
                    <Project
                      video={proseVid}
                      alt={'prose website'}
                      projName={'Prose Perfector'}
                      projDesc={"Prose Perfector is a web application designed to enhance the writing skills of its users using OpenAI's API. It offers a seamless experience where writers can securely sign up, submit their writing pieces for evaluation, and receive detailed feedback. Key features include the ability to specify the type of writing and desired style, obtaining ratings, and receiving a rewritten version of their text for clarity and style improvement. Users can manage their profiles, view submission history, and benefit from robust authentication and password security measures."}
                      tech={'React, React Bootstrap, Vite, Node.js, Express, PostgreSQL, OpenAI API, ViteTest, Jest, JWT (jsonwebtoken, jwt-decode), bcrypt, jsonschema, axios, Font Awesome'}
                      projLink={'https://capstone-2-cetn.onrender.com/'}
                      gitLink={'https://github.com/JonathanTylerWeber/capstone-2'}
                    />
                  </FadeInOnScroll>
                  <FadeInOnScroll threshold={0.05}>
                    <Project
                      video={translateVid}
                      alt={'translate website'}
                      projName={'Translate Web App'}
                      projDesc={"The Translate Web App is a comprehensive tool designed for seamless translation between English and Chinese languages. Utilizing the Google Cloud Translate API, users can input text to receive accurate translations along with phonetic spellings (pinyin). Key features include user authentication, translation history management, saving and unsaving of translations, and password reset functionality."}
                      tech={'HTML, CSS, Bootstrap, JavaScript, Flask (Python), PostgreSQL, Google Cloud Translate, Flask-DebugToolbar, Flask-Bcrypt, Xpinyin, Mailjet, Python-dotenv, Jinja, Font Awesome'}
                      projLink={'https://translate-e40f.onrender.com/'}
                      gitLink={'https://github.com/JonathanTylerWeber/capstone-1'}
                    />
                  </FadeInOnScroll>
                </>
              )}
            </Suspense>
          </Container>
        </div>
        <motion.div style={{ height }} className='circleContainer'>
          <div className='circle'></div>
        </motion.div>
      </div>
    </>
  );
}

export default memo(Body);
