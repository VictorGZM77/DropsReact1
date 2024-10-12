import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductList from './components/ItemList/ItemList';  // Ajusta la ruta correctamente
import './index.css';  // Aquí se importa el archivo de estilos globales (Tailwind CSS)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
