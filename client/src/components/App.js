import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FAQS from './FAQS'
import Homepage from "../pages/Homepage";
import ProductList from "./ProductList";
import Navbar from "./Navbar";
import Cart from "./Cart";


function App() {

  
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  return (
        <>
          <BrowserRouter>
          <Navbar cartCount={cartItems.length}/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/shop" element={<ProductList handleAddToCart={handleAddToCart} />}/>
              <Route path="/faqs" element={<FAQS/>}/>
              <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/product/:id/checkout" element={<div>Checkout Page</div>} />
            </Routes>
          </BrowserRouter>
        </>
  );
}

export default App;
