"use client"
import { Box } from '@mui/material';
import React, { useState } from 'react';
import Btn from '../Btn/Btn';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    try {
      const response = await fetch('/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to save email');
      }

      // Handle successful submission, e.g., show success message, reset form, etc.
      console.log('Email submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show error message to the user
    }
  };

  const validateEmail = (email :any) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e:any) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <Box component='form' className="flex row wrap gap gap1" sx={{minHeight:'40px',maxWidth:{xs:"90%",md:'500px'}}}>

      <input
        className='emailinput'
        style={{ backgroundColor: 'white', color: 'black', borderRadius: '4px' }}
        placeholder='Enter Email'
        type='email'
        value={email}
        onChange={handleChange}
      />
      <Btn  onClick={handleSubmit} sx={{ padding: '.5em 0em' }}>
        Submit
      </Btn>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </Box>

  );
};

export default EmailForm;