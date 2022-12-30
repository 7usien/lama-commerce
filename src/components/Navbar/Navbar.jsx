import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { Cart } from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);

  const products = useSelector((state) => state.cart.products);
  const [quantityTotal, setQuantityTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    products?.map((item) => (total += item.quantity));

    setQuantityTotal(total);
  }, [products]);

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            USD
            <KeyboardArrowDownIcon />
          </div>

          <div className='item'>
            <Link className='link' to='products/1'>
              Women
            </Link>
          </div>

          <div className='item'>
            <Link className='link' to='products/2'>
              Men
            </Link>
          </div>

          <div className='item'>
            <Link className='link' to='products/3'>
              Children
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>
            Lamastore
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='about'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='contact'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='stores'>
              Stores
            </Link>
          </div>

          <div className='icons'>
            <SearchIcon />
            <Person2OutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className='cartIcon'
              onClick={() => {
                setOpenCart(!openCart);
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span>{quantityTotal}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
