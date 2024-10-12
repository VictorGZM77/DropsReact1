import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import PurchasePage from './components/PurchasePage/PurchasePage';
import FormDePago from './components/FormDePago/FormDePago'; 

function App() {
  const [cart, setCart] = useState([]);  

 
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartItemCount={cart.length} />  
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/purchase/:id" element={<PurchasePage addToCart={addToCart} />} />
            <Route path="/checkout" element={<FormDePago />} /> 
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
