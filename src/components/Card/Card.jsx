import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export const Card = ({ item }) => {
  return (
    <Link className='link' to={`product/${item.id}`}>
      <div className='card'>
        <div className='images'>
          {item.isNew && <span className='isNew'>new season</span>}
          <img src={item.img} alt={item.title} className='mainImg' />
          <img src={item.img2} alt={item.title} className='secondImg' />
        </div>
        <h2>{item.title}</h2>

        <div className='prices'>
          <h3 className='oldprice'>$ {item.oldPrice} </h3>
          <h3>$ {item.price} </h3>
        </div>
      </div>
    </Link>
  );
};
