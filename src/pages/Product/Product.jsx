import { useState } from 'react';
import './Product.scss';
const Product = () => {
  const [curretImg, setCurrentImg] = useState(0);

  const images = [
    'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-1.jpg',
    'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-5.jpg',
  ];

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
        <h3>product title</h3>
        <span className='price'>$ 19</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex
          facere aliquam, repellendus cumque aliquid ratione animi culpa illo
          ipsum quaerat mollitia consequuntur obcaecati, natus fugit nostrum
          asperiores repudiandae magnam. Vel iusto repellendus architecto modi
          mollitia dignissimos magni ullam.
        </p>
      </div>
    </div>
  );
};

export default Product;
