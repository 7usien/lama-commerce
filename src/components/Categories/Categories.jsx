import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.scss';

export const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/3655764/pexels-photo-3655764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <button>
            <Link className='link' to='products/1'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <button>
            <Link className='link' to='products/1'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/6567539/pexels-photo-6567539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <button>
            <Link className='link' to='products/1'>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-1'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />
              <button>
                <Link className='link' to='products/1'>
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
              />
              <button>
                <Link className='link' to='products/1'>
                  Accessoires
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/6328154/pexels-photo-6328154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <button>
            <Link className='link' to='products/1'>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
