// CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  addItem: (item, cantidad) => {},
  removeItem: (itemId) => {},
  clearCart: () => {},
  getTotalItems: () => 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].cantidad += cantidad;
    } else {
      updatedCart.push({ item, cantidad });
    }

    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, cartItem) => total + cartItem.cantidad, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};