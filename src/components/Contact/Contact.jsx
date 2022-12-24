import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import YouTubeIcon from '@mui/icons-material/YouTube';

import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Contact.scss';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH</span>

        <div className='form'>
          <input type='text' placeholder='enter your mail' />
          <input type='submit' value='Subsribe' />
        </div>
        <div className='icons'>
          <Link className='link' to=''>
            <FacebookIcon />
          </Link>
          <Link className='link' to=''>
            <TwitterIcon />
          </Link>
          <YouTubeIcon />
          <Link className='link' to=''></Link>
          <InstagramIcon />
          <Link className='link' to=''></Link>
          <LinkedInIcon />
          <Link className='link' to=''></Link>
        </div>
      </div>
    </div>
  );
};
