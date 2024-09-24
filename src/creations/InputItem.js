import React, { useState } from 'react';

function InputItem({ addItem }) {
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad
  const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar el error

  const handleAddClick = () => {
    if (newItem.trim() === '') { // Verificar si el campo está vacío
      setErrorMessage('Ingresar producto');
    } else {
      addItem(newItem, quantity);
      setNewItem('');  // Limpiar campo del producto
      setQuantity(1);  // Restablecer la cantidad
      setErrorMessage(''); // Limpiar el mensaje de error si se ingresó correctamente
    }
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
        onChange={(e) => setQuantity(Number(e.target.value))} 
        min="1" 
      />
      <button onClick={handleAddClick}>Agregar</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Mostrar mensaje de error */}
    </div>
  );
}

export default InputItem;
