import React from 'react'
import "./Project.css";
import { Row, Col } from "react-bootstrap";
import MagnetLink from './MagnetLink';

const Project = ({ img, alt, projName, projDesc, tech }) => {
  return (
    <div className="proj-container">
      <Row>
        <Col >
          <img className='proj-img' src={img} alt={alt} />
          <p className='tech'>{tech} </p>
        </Col>

        <Col >
          <p className='proj-name'>{projName}</p>
          <p className='proj-desc'>{projDesc} </p>
          <span className='proj-links'>
            <MagnetLink>
              <a className='proj-link'>Live Site</a>
            </MagnetLink>
            <MagnetLink>
              <a className='proj-link'>GitHub</a>
            </MagnetLink>
          </span>
          <p className='demo'>username: test <br />  password: testtest
          </p>
        </Col>
      </Row>


    </div>
  )
}

export default Project