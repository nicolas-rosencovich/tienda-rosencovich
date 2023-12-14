// RouterPrincipal.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from '../Items/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from '../Items/ItemDetailContainer/ItemDetailContainer.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import { CartProvider } from '../Context/CartContext.jsx';
import Order from '../Order/Order.jsx';

const RouterPrincipal = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartProvider />} /> {/* Elimina este CartProvider */}
          <Route path="/checkout" element={<Order />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default RouterPrincipal;