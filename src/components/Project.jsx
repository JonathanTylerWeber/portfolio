import React from 'react'
import "./Project.css";
import MagnetLink from './MagnetLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ img, alt, projName, projDesc, tech }) => {
  return (
    <div className="proj-container">
      <img className='proj-img' src={img} alt={alt} />
      <div className='proj-content'>
        <p className='proj-name'>{projName}</p>
        <p className='proj-desc'>{projDesc} </p>
        <p className='tech'>{tech} </p>
        <span className='proj-links'>

          <MagnetLink>
            <a href="#">
              <FontAwesomeIcon className="proj-link" icon={faLink} />
            </a>
          </MagnetLink>

          <MagnetLink>
            <a href="#">
              <FontAwesomeIcon className="proj-link" icon={faGithub} />
            </a>
          </MagnetLink>

        </span>
      </div>

    </div>
  )
}

export default Project