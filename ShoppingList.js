import React, { useState } from 'react';
import InputItem from './InputItem';
import ItemList from './ItemList';

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    if (newItem && !items.includes(newItem)) {
      setItems([...items, { name: newItem, bought: false }]);
    }
  };

  const toggleItemBought = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <InputItem onAddItem={addItem} />
      <ItemList items={items} onToggleItem={toggleItemBought} onDeleteItem={deleteItem} />
    </div>
  );
}

export default ShoppingList;
