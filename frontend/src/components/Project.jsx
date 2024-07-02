import { memo, Suspense, lazy } from 'react'
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import useIsMobile from '../hooks/useIsMobile';

const MagnetLink = lazy(() => import('./MagnetLink'));

const Project = ({ alt, projName, projDesc, tech, video, projLink, gitLink, img }) => {

  const isMobile = useIsMobile();

  return (
    <div className="proj-container">
      {isMobile ? (
        <img className="proj-vid" src={img} alt='proj-img' />
      ) : (
        <video className='proj-vid' src={video} autoPlay loop muted alt={alt} />
      )}
      <div className='proj-content'>
        <p className='proj-name'>{projName}</p>
        <p className='proj-desc'>{projDesc} </p>
        <p className='tech'>{tech} </p>

        <p className='disclaimer'>(The site is deployed on render, please allow 15-30s for the page to load and to signup/login)</p>
        <span className='proj-links'>

          <Suspense>
            {isMobile ? (
              <a href={projLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="proj-link" icon={faLink} />
              </a>
            ) : (
              <MagnetLink>
                <a href={projLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="proj-link" icon={faLink} />
                </a>
              </MagnetLink>
            )}
          </Suspense>

          <Suspense>
            {isMobile ? (
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="proj-link" icon={faGithub} />
              </a>
            ) : (
              <MagnetLink>
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="proj-link" icon={faGithub} />
                </a>
              </MagnetLink>
            )}
          </Suspense>

        </span>
      </div>

    </div>
  )
}

export default memo(Project)