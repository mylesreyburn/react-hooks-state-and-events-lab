import React, { useState } from "react";

function Item({ name, category }) {

  const [cartState, changeCartState] = useState(false)

  function addToCart(){
    changeCartState(!cartState)
  }

  return (
    <li className={cartState ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{cartState ?  "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
