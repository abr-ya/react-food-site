import React from 'react';
import './MenuItem.scss';

interface IMenuItem {
  image: string;
  name: string;
  price: number;
}

const MenuItem = ({ image, name, price }: IMenuItem) => (
  <div className="menuItem">
    <div style={{ backgroundImage: `url(${image})` }}> </div>
    <h1>{name}</h1>
    <p>{`${price} RUB`}</p>
  </div>
);

export default MenuItem;
