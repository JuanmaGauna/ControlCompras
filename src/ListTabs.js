import React, { useState } from 'react';
import ShoppingList from './ShoppingList';

function ListTabs() {
  const [lists, setLists] = useState([
    { name: 'Lista 1', color: '#FF0000', items: [] },
  ]);
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const [newListName, setNewListName] = useState('');

  const addList = () => {
    if (newListName.trim()) {
      setLists([...lists, { name: newListName, color: '#000000', items: [] }]);
      setNewListName('');
    }
  };

  const updateListColor = (index, color) => {
    const updatedLists = lists.map((list, i) => 
      i === index ? { ...list, color } : list
    );
    setLists(updatedLists);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {lists.map((list, index) => (
          <button 
            key={list.name} 
            onClick={() => setCurrentListIndex(index)}
            style={{ backgroundColor: list.color }}
          >
            {list.name}
          </button>
        ))}
        <input 
          type="text" 
          placeholder="Nueva lista" 
          value={newListName} 
          onChange={(e) => setNewListName(e.target.value)} 
        />
        <button onClick={addList}>Agregar Lista</button>
      </div>

      <input 
        type="color" 
        value={lists[currentListIndex].color} 
        onChange={(e) => updateListColor(currentListIndex, e.target.value)} 
      />

      <ShoppingList 
        items={lists[currentListIndex].items} 
        setItems={(newItems) => {
          const updatedLists = lists.map((list, index) => 
            index === currentListIndex ? { ...list, items: newItems } : list
          );
          setLists(updatedLists);
        }} 
      />
    </div>
  );
}

export default ListTabs;
