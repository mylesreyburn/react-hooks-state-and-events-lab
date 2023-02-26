import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, changeSelectedCategory] = useState(
    items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  )

  let filteredScrum = []

  function filterCategory(){
    
    let scrum = items.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))
  
    filteredScrum = scrum.filter((type) => {
      return type.props.category === document.querySelector("select").value
    })

    console.log(filteredScrum)

    console.log("selectedCategory", selectedCategory)
    changeSelectedCategory(filteredScrum)
    console.log("selectedCategory", selectedCategory)
  }

  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <button onClick={filterCategory}>test</button>
      </div>
      <ul className="Items">
        {selectedCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;
