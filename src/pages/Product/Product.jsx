import React from 'react';
// React
import { useState } from 'react';

// Icons, UI
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Compo
import './Product.scss';
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const id = useParams();
  const productId = parseInt(id.id);

  const [curretImg, setCurrentImg] = useState(0);
  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            onClick={() => {
              setCurrentImg(0);
            }}
            alt=''
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            onClick={() => {
              setCurrentImg(1);
            }}
            alt=''
          />
        </div>
        <div className='mainImg'>
          <img
            src={
              curretImg === 0
                ? process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                : process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
            }
            alt=''
          />
        </div>
      </div>
      <div className='right'>
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>$ {data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>

        <div className='quantity'>
          <button
            onClick={() =>
              setQuantity((prev) => {
                return prev === 1 ? 1 : prev - 1;
              })
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>

        <button className='add'>
          <AddShoppingCartIcon /> add to cart
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon /> Add to wishlist
          </div>
          <div className='item'>
            <CompareIcon /> add to compare
          </div>
        </div>

        <div className='info'>
          <span>vendor: Polo</span>
          <span>product type : T-shirt</span>
          <span>tags:: t-shirtm women, tioop</span>
        </div>
        <hr />

        <div className='details'>
          <span>description</span>
          <hr />
          <span>additional info</span>
          <hr />
          <span>faq</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
