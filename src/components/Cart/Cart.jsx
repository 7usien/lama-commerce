import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartSlice';

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    let totalCount = products.map(
      (item) => (total += item.quantity * item.price)
    );
    return total;
  };

  const dispatch = useDispatch();

  return (
    <div className='cart'>
      <h1>products in your cart</h1>

      {products?.map((item, idx) => (
        <div className='item' key={idx}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h2>{item.title}</h2>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x $ {item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className='delete'
            onClick={() => {
              dispatch(removeItem(item.id));
            }}
          />
        </div>
      ))}
      <div className='total'>
        <span>subtotal </span>
        <span> $ {totalPrice()}</span>
      </div>
      <button>processed to checkout</button>
      <span
        className='reset'
        onClick={() => {
          dispatch(resetCart());
        }}
      >
        reset cart
      </span>
    </div>
  );
};
