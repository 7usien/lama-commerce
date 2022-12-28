import React from 'react';

import { useState } from 'react';
import './Products.scss';

import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from './../../hooks/useFetch';
const Products = () => {
  const params = useParams();

  const catId = parseInt(params.id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState(null);

  const { data, error, isloading } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data);
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          {data.map((item) => (
            <div className='inputItem'>
              <input type='checkbox' id={item.id} vlue={item.id} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>filter by price :</h2>
          <span>0</span>
          <input
            type='range'
            min='0'
            max='1000'
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
          <span>{maxPrice}</span>
        </div>

        <div className='filterItem'>
          <h2>sort by :</h2>
          <div className='inputItem'>
            <input
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              type='radio'
              id='asc'
              value='asc'
              name='price'
            />
            <label htmlFor='asc'>price lowest first</label>
          </div>
          <div className='inputItem'>
            <input
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              type='radio'
              id='desc'
              value='desc'
              name='price'
            />
            <label htmlFor='desc'>price Highest first</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          src='https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&w=1000&h=300&dpr=2'
          alt=''
          className='catImg'
        />

        <List catId={catId} maxprice={maxPrice} sort={sortBy} />
      </div>
    </div>
  );
};

export default Products;
