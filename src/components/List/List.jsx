import React from 'react';
import { Card } from '../Card/Card';
import './List.scss';

const List = ({ catId, maxprice, sort }) => {
  console.log(catId, maxprice, sort);

  const data = [
    {
      id: 1,
      img: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-1.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2022/07/18/z--8353391-5.jpg',
      title: 'new Hijab Coloful ',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-1.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2019/07/23/z-roseum-degrade-sal--ekru--differenza-1160289-2.jpg',
      title: 'muslim women Scarf ',
      isNew: true,
      oldPrice: 10,
      price: 7,
    },

    {
      id: 3,
      img: 'https://fns.modanisa.com/r/pro2/2021/01/25/z--7894364-1.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2021/01/25/z--7894364-3.jpg',
      title: 'Colfoul muslim women Scarf ',
      isNew: false,
      oldPrice: 30,
      price: 21,
    },

    {
      id: 4,
      img: 'https://fns.modanisa.com/r/pro2/2021/12/31/z-clara-sal--gul-kurusu--mervin-sal-8176455-2.jpg',
      img2: 'https://fns.modanisa.com/r/pro2/2021/12/31/z-clara-sal--gul-kurusu--mervin-sal-8176455-1.jpg',
      title: 'Girl Hijab Modern ',
      isNew: false,
      oldPrice: 20,
      price: 16,
    },
  ];

  return (
    <div className='list'>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
