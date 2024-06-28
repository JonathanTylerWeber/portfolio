import React, { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';

import {
  motion
} from 'framer-motion';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL || "http://localhost:5001";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/send-email`, {
        email,
        name,
        subject,
        text,
      });
      setStatus('Email sent successfully');
    } catch (error) {
      setStatus('Error sending email');
    }
  };

  return (
    <div className='email-form-container'>
      <form onSubmit={handleSubmit} className='email-form'>
        <div className='form-group'>
          <label className='form-label' htmlFor='email'>
            Email:
          </label>
          <input
            className='form-input'
            type="email"
            id='email'
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='name'>
            Name:
          </label>
          <input
            className='form-input'
            type="text"
            id='name'
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='subject'>
            Subject:
          </label>
          <input
            className='form-input'
            type="text"
            id='subject'
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label' htmlFor='text'>
            Message:
          </label>
          <textarea
            className='form-input textarea'
            rows={5}
            id='text'
            placeholder="Message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <div className='btn-container'>
          <motion.button
            className='btn'
            type="submit"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#fff',
              color: '#222831'
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
          >
            Send Email
          </motion.button>
        </div>
        <p className={`status ${status.includes('successfully') ? 'success' : 'error'}`}>
          {status}
        </p>
      </form>
    </div>
  );
};

export default EmailForm;
