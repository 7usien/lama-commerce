import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className='images'>
          {item.attributes?.isNew && <span className='isNew'>new season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img.data.attributes.url
            }
            alt={item?.attributes.title}
            className='mainImg'
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2.data.attributes.url
            }
            alt={item.attributes?.title}
            className='secondImg'
          />
        </div>
        <h2>{item?.attributes.title}</h2>

        <div className='prices'>
          <h3 className='oldprice'>
            $ {item.attributes?.oldPrice || item?.attributes.price + 20}
          </h3>
          <h3>$ {item.attributes?.price} </h3>
        </div>
      </div>
    </Link>
  );
};
