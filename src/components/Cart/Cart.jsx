import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss';

export const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-1.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-5.jpg',
      title: 'new Hijab Coloful ',
      desc: 'some desc here for your product',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-1.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-2.jpg',
      desc: 'some desc here for your product',
      title: 'muslim women Scarf ',
      isNew: true,
      oldPrice: 10,
      price: 7,
    },
  ];

  return (
    <div className='cart'>
      <h1>products in your cart</h1>

      {data?.map((item, idx) => (
        <div className='item' key={idx}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h2>{item.title}</h2>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>1 x {item.price}</div>
          </div>
          <DeleteOutlineIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>subtotal </span>
        <span> $ 123</span>
      </div>
      <button>processed to checkout</button>
      <span className='reset'>reset cart</span>
    </div>
  );
};
