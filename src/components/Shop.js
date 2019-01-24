import React from 'react';
import { Link } from 'react-router-dom';

function Shop(props) {
  return (
    <div className="items-list-wrapper">
      {props.itemList.map(item => (
        <Link to={`/shop/${item.id}`} className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
