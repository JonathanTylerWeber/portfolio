import React from 'react'
import { Container } from "react-bootstrap";
import './ContactBody.css'

import FadeInOnScroll from "./FadeInOnScroll";
import EmailForm from '../components/EmailForm'

const ContactBody = () => {
  return (
    <>
      <div className='contact-body'>
        <FadeInOnScroll threshold={.05}>
          <Container>

            <h1 className='contact-title'>Contact Me</h1>
            <EmailForm />

          </Container>
        </FadeInOnScroll>
      </div>
    </>
  )
}

export default ContactBody