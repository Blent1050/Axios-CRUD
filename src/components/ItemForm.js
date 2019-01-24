import React from "react";

function ItemForm(props) {
  return (
    <div>
      <form onSubmit={props.addItem}>
        <input
          type="text"
          name="name"
          value={props.newItem.name}
          placeholder="Name"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="text"
          name="description"
          value={props.newItem.description}
          placeholder="Description"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="text"
          name="imageUrl"
          value={props.newItem.imageUrl}
          placeholder="Image Url"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="number"
          name="price"
          value={props.newItem.price}
          placeholder="Price"
          onChange={props.handleChanges}
        />
        <div className="baseline" />

        <input
          type="text"
          name="shipping"
          value={props.newItem.shipping}
          placeholder="Shipping"
          onChange={props.handleChanges}
        />
        <div className="baseline" />
        <button className="md-button form-button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
