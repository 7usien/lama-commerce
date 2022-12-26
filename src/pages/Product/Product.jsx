// React
import { useState } from 'react';

// Icons, UI
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//Compo
import './Product.scss';

const Product = () => {
  const [curretImg, setCurrentImg] = useState(0);

  const images = [
    'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-1.jpg',
    'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-5.jpg',
  ];

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img
            src={images[0]}
            onClick={() => {
              setCurrentImg(0);
            }}
            alt=''
          />
          <img
            src={images[1]}
            onClick={() => {
              setCurrentImg(1);
            }}
            alt=''
          />
        </div>
        <div className='mainImg'>
          <img src={images[curretImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>product title</h1>
        <span className='price'>$ 19</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex
          facere aliquam, repellendus cumque aliquid ratione animi culpa illo
          ipsum quaerat mollitia consequuntur obcaecati, natus fugit nostrum
          asperiores repudiandae magnam. Vel iusto repellendus architecto modi
          mollitia dignissimos magni ullam.
        </p>

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
