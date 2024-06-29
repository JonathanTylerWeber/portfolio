import { memo, lazy, Suspense } from 'react'
import { Container } from "react-bootstrap";
import './ContactBody.css'

const FadeInOnScroll = lazy(() => import("./FadeInOnScroll"));
const EmailForm = lazy(() => import("../components/EmailForm"));

const ContactBody = () => {
  return (
    <>
      <div className='contact-body'>
        <Suspense>
          <FadeInOnScroll threshold={.05}>
            <Container>

              <h1 className='contact-title'>Contact Me</h1>

              <Suspense>
                <EmailForm />
              </Suspense>

            </Container>
          </FadeInOnScroll>
        </Suspense>
      </div>
    </>
  )
}

export default memo(ContactBody)