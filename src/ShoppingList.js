import React, { useState } from 'react';
import InputItem from './InputItem';
import ItemList from './ItemList';

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (newItem, quantity) => {
    if (newItem && !items.some(item => item.name === newItem)) {
      setItems([...items, { name: newItem, quantity: quantity }]);
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item.name !== itemToRemove));
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <InputItem addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
