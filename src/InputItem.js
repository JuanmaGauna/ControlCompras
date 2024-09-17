import React, { useState } from 'react';

function InputItem({ addItem }) {
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(1);  // Estado para manejar la cantidad

  const handleAddClick = () => {
    addItem(newItem, quantity);
    setNewItem('');
    setQuantity(1);  // Reseteamos la cantidad después de agregar el ítem
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Producto" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Cantidad" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        min="1" 
      />
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
}

export default InputItem;
