import React, { useEffect, useState } from 'react';

import './FeaturedProducts.scss';
import Products from './../../pages/Products/Products';
import { Card } from '../Card/Card';
import axios from 'axios';
export const FeaturedProducts = ({ type }) => {
  //   const data = [
  //     {
  //       id: 1,
  //       img: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-1.jpg',
  //       img2: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-5.jpg',
  //       title: 'new Hijab Coloful ',
  //       isNew: true,
  //       oldPrice: 19,
  //       price: 12,
  //     },
  //
  //     {
  //       id: 2,
  //       img: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-1.jpg',
  //       img2: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-2.jpg',
  //       title: 'muslim women Scarf ',
  //       isNew: true,
  //       oldPrice: 10,
  //       price: 7,
  //     },
  //
  //     {
  //       id: 3,
  //       img: 'https://fns.modanisa.com/r/pro2/2021/01/25/z--7894364-1.jpg',
  //       img2: 'https://fns.modanisa.com/r/pro2/2021/01/25/z--7894364-3.jpg',
  //       title: 'Colfoul muslim women Scarf ',
  //       isNew: false,
  //       oldPrice: 30,
  //       price: 21,
  //     },
  //
  //     {
  //       id: 4,
  //       img: 'https://fns.modanisa.com/r/pro2/2021/12/31/z-clara-sal--gul-kurusu--mervin-sal-8176455-2.jpg',
  //       img2: 'https://fns.modanisa.com/r/pro2/2021/12/31/z-clara-sal--gul-kurusu--mervin-sal-8176455-1.jpg',
  //       title: 'Girl Hijab Modern ',
  //       isNew: false,
  //       oldPrice: 20,
  //       price: 16,
  //     },
  //   ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_PAPP_API_URL + '/products?populate=*',
          {
            headers: {
              authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='featureproducts'>
      <div className='top'>
        <h2>{type} Products :</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          odit aut voluptates sint obcaecati aspernatur maiores quia error
          molestiae! Repellat, nihil corrupti nesciunt natus sed eligendi
          temporibus tempore quae quod cupiditate sapiente eius minima illo
          cumque a sit. Doloremque exercitationem ipsum totam. Exercitationem,
          nobis beatae.
        </p>
      </div>
      <div className='bottom'>
        {data?.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};
