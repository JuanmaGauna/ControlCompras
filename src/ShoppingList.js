import React, { useState } from 'react';
import InputItem from './InputItem';
import ItemList from './ItemList';
import './App.css'

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (newItem, quantity) => {
    if (newItem.trim() !== '' && quantity > 0 && !items.some(item => item.name === newItem)) {
      setItems([...items, { name: newItem, quantity: quantity, purchased: false }]);
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item.name !== itemToRemove));
  };

  const updateItem = (oldName, newName, newQuantity) => {
    setItems(items.map(item => 
      item.name === oldName ? { ...item, name: newName, quantity: newQuantity } : item
    ));
  };

  const togglePurchased = (itemName) => {
    setItems(items.map(item => 
      item.name === itemName ? { ...item, purchased: !item.purchased } : item
    ));
  };

  return (
    <div className="center-container">
      <div className='box-container'>
      <h1 className="tituloPrincipal">Lista de Compras </h1>
      <InputItem addItem={addItem} />
      <ItemList 
        items={items} 
        removeItem={removeItem} 
        updateItem={updateItem} 
        togglePurchased={togglePurchased} 
      />
      </div>
    </div>
  );
}

export default ShoppingList;
