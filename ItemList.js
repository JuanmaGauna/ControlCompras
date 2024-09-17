import React from 'react';

function ItemList({ items, onToggleItem, onDeleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ textDecoration: item.bought ? 'line-through' : 'none' }}>
          {item.name}
          <button onClick={() => onToggleItem(index)}>
            {item.bought ? 'Desmarcar' : 'Marcar como Comprado'}
          </button>
          <button onClick={() => onDeleteItem(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
