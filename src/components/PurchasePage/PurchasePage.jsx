import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../Data/asyncMock';  // Importamos el mock de productos

const PurchasePage = ({ addToCart }) => {  // Recibe la función para agregar al carrito
  const { id } = useParams();  // Capturamos el ID del producto desde la URL
  const product = products.find((p) => p.id === parseInt(id));  // Buscamos el producto por ID

  // Estado para la talla y la cantidad seleccionadas
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p>Producto no encontrado</p>;  // Si no encontramos el producto
  }

  // Manejar el clic en el botón de "Agregar al Carrito"
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla.');
      return;
    }

    // Agregar el producto al carrito con la talla y cantidad seleccionadas
    addToCart({
      ...product,
      selectedSize,
      quantity
    });

    alert('Producto agregado al carrito');
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>

        {/* Detalles del producto */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-black mb-6">{product.price}</p>

          {/* Opciones de talla */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Elige tu talla</h4>
            <div className="flex space-x-2">
              <button
                className={`border px-4 py-2 ${selectedSize === '7.5' ? 'bg-gray-700 text-white' : ''}`}
                onClick={() => setSelectedSize('7.5')}
              >
                US 7.5 MEN
              </button>
              <button
                className={`border px-4 py-2 ${selectedSize === '8' ? 'bg-gray-700 text-white' : ''}`}
                onClick={() => setSelectedSize('8')}
              >
                US 8 MEN
              </button>
              <button
                className={`border px-4 py-2 ${selectedSize === '8.5' ? 'bg-gray-700 text-white' : ''}`}
                onClick={() => setSelectedSize('8.5')}
              >
                US 8.5 MEN
              </button>
            </div>
          </div>

          {/* Selección de cantidad */}
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Cantidad</h4>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border px-4 py-2 w-20"
            />
          </div>

          {/* Botón para agregar al carrito */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800"
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
