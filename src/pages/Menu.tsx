import React from 'react';
import MenuList from 'data/MenuList';
import MenuItem from 'components/MenuItem/MenuItem';
import './Menu.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem) => (
          <MenuItem
            key={menuItem.image}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Menu;
