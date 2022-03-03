import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import Custom from './custom';

function App() {
  return (
      <>
      <CartProvider>
      <Home />
      <Cart />
      </CartProvider>
      <Custom></Custom>
      </>
  );
}

export default App;
