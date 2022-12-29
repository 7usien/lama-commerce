import React from 'react';
import { Card } from '../Card/Card';
import './List.scss';
import useFetch from './../../hooks/useFetch';

const List = ({ catId, maxprice, sort, subCats }) => {
  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`
  );

  console.log(sort);

  return (
    <div className='list'>
      {loading ? (
        <div className='loading'>loading wait ..</div>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
