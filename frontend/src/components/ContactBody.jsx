import { memo, lazy, Suspense } from 'react'
import { Container } from "react-bootstrap";
import './ContactBody.css'
import useIsMobile from '../hooks/useIsMobile';

const FadeInOnScroll = lazy(() => import("./FadeInOnScroll"));
const EmailForm = lazy(() => import("../components/EmailForm"));

const ContactBody = () => {

  const isMobile = useIsMobile();

  return (
    <>
      <div className='contact-body'>
        <Suspense>
          {isMobile ? (
            <Container>
              <h1 className='contact-title'>Contact Me</h1>
              <Suspense fallback={null}>
                <EmailForm />
              </Suspense>
            </Container>
          ) : (
            <FadeInOnScroll threshold={.05}>
              <Container>
                <h1 className='contact-title'>Contact Me</h1>
                <Suspense fallback={null}>
                  <EmailForm />
                </Suspense>
              </Container>
            </FadeInOnScroll>
          )}
        </Suspense>
      </div>
    </>
  )
}

export default memo(ContactBody)