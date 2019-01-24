import React from 'react';

function Shipping(props) {
  return (
    <div>
      <p className="item-description">{props.item.shipping}</p>
    </div>
  );
}

export default Shipping;
