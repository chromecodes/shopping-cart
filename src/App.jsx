import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import Cart from "./components/Cart";

export default function App() {
  const [cart, updateCart] = useState([]);
  const [showCart, updateShowCart] = useState(false);

  const openCart = () => {
    updateShowCart(true);
  };
  const closeCart = () => {
    updateShowCart(false);
  };

  return (
    <>
      <div className='app bg-slate-100'>
        {showCart ? <Cart close={closeCart} /> : undefined}
        <Header open={openCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </>
  );
}
