import React from 'react';

function ItemList({ items, removeItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name} - Cantidad: {item.quantity}
          <button onClick={() => removeItem(item.name)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;

