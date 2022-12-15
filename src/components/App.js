import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import ItemForm from "./ItemForm"

function App() {
  const [items, setItems] = useState(itemData)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const onSearchChange = (e) => {
    setSearchQuery(searchQuery => e.target.value);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const updateItems = items.filter(item => {
    if (searchQuery !== ""){
      return item.name.toLowerCase().includes(searchQuery.toLowerCase())
    } else { return true }
  })


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
        items={updateItems}
        onSearchChange={onSearchChange} 
      >
        <ItemForm 
          items={updateItems} 
          setItems={setItems}
        />
      </ShoppingList>
    </div>
  );
}

export default App;
