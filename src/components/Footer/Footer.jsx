import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className='top'>
          <section className='item'>
            <h2>categories</h2>

            <Link className='link' to=''>
              Women
            </Link>
            <Link className='link' to=''>
              Men
            </Link>
            <Link className='link' to=''>
              Shoes
            </Link>
            <Link className='link' to=''>
              Accessoires
            </Link>
            <Link className='link' to=''>
              New arrivals
            </Link>
          </section>
          <section className='item'>
            <h2>Links</h2>

            <Link className='link' to=''>
              Faq
            </Link>
            <Link className='link' to=''>
              Pages
            </Link>
            <Link className='link' to=''>
              Stores
            </Link>
            <Link className='link' to=''>
              Compare
            </Link>
            <Link className='link' to=''>
              Cookies
            </Link>
          </section>

          <section className='item'>
            <h2>about</h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur excepturi dolorem fugiat nobis nisi expedita minus.
              Unde reprehenderit rem perferendis ipsam reiciendis laborum, ex
              vitae, quisquam, corrupti quis vel quos!
            </p>
          </section>

          <section className='item'>
            <h2>Contact</h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur excepturi dolorem fugiat nobis nisi expedita minus.
              Unde reprehenderit rem perferendis ipsam reiciendis laborum, ex
              vitae, quisquam, corrupti quis vel quos!
            </p>
          </section>
        </div>
        <div className='bottom'>
          <div className='left'>
            <span className='logo'>Lamstore</span>

            <div className='copyright'>
              © copyrights 2023 All rights are reserved
            </div>
          </div>
          <div className='right'>
            <img src='img/payment.png' alt='' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
