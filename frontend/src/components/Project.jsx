import { memo, Suspense, lazy } from 'react'
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MagnetLink = lazy(() => import('./MagnetLink'));

const Project = ({ alt, projName, projDesc, tech, video, projLink, gitLink }) => {

  return (
    <div className="proj-container">
      <video className='proj-vid' src={video} autoPlay loop muted alt={alt} />
      <div className='proj-content'>
        <p className='proj-name'>{projName}</p>
        <p className='proj-desc'>{projDesc} </p>
        <p className='tech'>{tech} </p>

        <p className='disclaimer'>(The site is deployed on render, please allow 15-30s for the page to load and to signup/login)</p>
        <span className='proj-links'>

          <Suspense>
            <MagnetLink>
              <a href={projLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="proj-link" icon={faLink} />
              </a>
            </MagnetLink>
          </Suspense>

          <Suspense>
            <MagnetLink>
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="proj-link" icon={faGithub} />
              </a>
            </MagnetLink>
          </Suspense>

        </span>
      </div>

    </div>
  )
}

export default memo(Project)