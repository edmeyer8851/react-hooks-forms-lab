import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({items, setItems}) {

  const [formData, setFormData] = useState({name: "", category:"Produce"})

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onItemFormSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category
    }
    if (newItem.name !== "") {
      setItems([...items, newItem])
    } else { alert("Please enter a name before adding a new item!") }
  }

  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
