import React, { useState } from 'react';

function ItemList({ items, removeItem, updateItem, togglePurchased }) {
  const [editItem, setEditItem] = useState(null); // Estado para manejar el modo de edición
  const [editedName, setEditedName] = useState('');
  const [editedQuantity, setEditedQuantity] = useState(1);

  const handleEditClick = (item) => {
    setEditItem(item.name);
    setEditedName(item.name);
    setEditedQuantity(item.quantity);
  };

  const handleSaveClick = (item) => {
    if (editedName.trim() && editedQuantity > 0) {
      updateItem(item.name, editedName, editedQuantity);
      setEditItem(null); // Salir del modo de edición
    }
  };

  return (
    <ul>
      {items
        .filter(item => !item.purchased) // Filtrar los items no comprados
        .concat(items.filter(item => item.purchased)) // Agregar los comprados al final
        .map((item) => (
          <li key={item.name} style={{ textDecoration: item.purchased ? 'line-through' : 'none' }}>
            {editItem === item.name ? (
              <div>
                <input 
                  type="text" 
                  value={editedName} 
                  onChange={(e) => setEditedName(e.target.value)} 
                />
                <input 
                  type="number" 
                  value={editedQuantity} 
                  onChange={(e) => setEditedQuantity(Number(e.target.value))} 
                  min="1" 
                />
                <button onClick={() => handleSaveClick(item)}>Guardar</button>
              </div>
            ) : (
              <>
                {item.name} - Cantidad: {item.quantity}
                <button onClick={() => handleEditClick(item)}>Editar</button>
                <button onClick={() => removeItem(item.name)}>Eliminar</button>
                <button onClick={() => togglePurchased(item.name)}>
                  {item.purchased ? 'Desmarcar' : 'Marcar como comprado'}
                </button>
              </>
            )}
          </li>
        ))}
    </ul>
  );
}
export default ItemList;