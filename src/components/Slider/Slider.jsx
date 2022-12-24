import React, { useState } from 'react';
import { EastOutlined } from '@mui/icons-material';
import { WestOutlined } from '@mui/icons-material';
import './Slider.scss';

export const Slider = () => {
  const data = [
    'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};
