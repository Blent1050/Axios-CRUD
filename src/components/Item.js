import React from "react";
import { Route, NavLink } from "react-router-dom";

import Shipping from "./Shipping";
import Story from "./Story";

function Item(props) {
  console.log(props);
  // find the item with the id that is in the url bar and set it to const item;
  // loop over data -> grab the id from the url and search for our item
  const item = props.itemList.find(
    item => `${item.id}` === props.match.params.itemId
  );

  if (!item) return <h2>Cannot find that item!</h2>;

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>

      <nav className="item-sub-nav">
        <NavLink exact to={`/shop/${item.id}`}>
          the story
        </NavLink>
        <NavLink to={`/shop/${item.id}/shipping`}>shipping</NavLink>
      </nav>

      {/* build out a shipping route, and a story route */}
      <Route
        exact
        path={`/shop/${item.id}`}
        render={props => <Story {...props} item={item} />}
      />
      <Route
        path={`/shop/${item.id}/shipping`}
        render={props => <Shipping {...props} item={item} />}
      />
      <button onClick={e => props.deleteItem(e, item.id)} className="md-button">
        Delete Item
      </button>
    </div>
  );
}

export default Item;
