import React from 'react';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import './FeaturedProducts.scss';
import { Card } from '../Card/Card';
import useFetch from './../../hooks/useFetch';
export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

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
        {loading ? (
          <div className='loading'>
            <HourglassTopIcon />
            loading wait ..
          </div>
        ) : error ? (
          <div>error.message</div>
        ) : (
          data.map((item, idx) => <Card item={item} key={idx} />)
        )}
      </div>
    </div>
  );
};
