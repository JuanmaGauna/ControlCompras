import React from 'react';
import ShoppingList from './ShoppingList';  // Asegúrate de que esto esté presente si usas ShoppingList
import './App.css';  // Importa el archivo de estilos CSS

function App() {
  return (
    <div>  {/* Contenedor con Flexbox para centrar */}
      <ShoppingList />  {/* Mantén ShoppingList si es parte de tu aplicación */}
    </div>
  );
}


export default App;