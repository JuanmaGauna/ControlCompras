import React, { useState } from 'react';

function InputItem({ onAddItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue(''); // Limpiar el campo de texto
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Añadir ítem"
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

export default InputItem;
