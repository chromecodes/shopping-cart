import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { AnimatePresence } from "framer-motion";
import Cardexp from "./components/Cardexp";
import { FaBullseye } from "react-icons/fa";

export default function App() {
  const location = useLocation();
  const [cart, updateCart] = useState([]);
  const [showCart, updateShowCart] = useState(false);
  const [cardExd, updateCardExd] = useState(false);
  const [crrtCard, updateCrrtCard] = useState();

  const [total, updateTotal] = useState(0);

  const openCart = () => {
    updateShowCart(true);
  };

  const closeCart = () => {
    updateShowCart(false);
  };

  const addItem = (item) => {
    if (!cart.includes(item)) {
      updateCart([...cart, item]);
    }
  };

  const removeItem = (i) => {
    let tempCart = cart;
    tempCart.splice(i, 1);
    updateCart([...tempCart]);
  };

  const resetCart = () => {
    updateCart([]);
  };

  useEffect(() => {
    let totalI = cart.reduce((a, b) => {
      return a + b.price * b.amt;
    }, 0);
    updateTotal(totalI);
  }, [cart]);

  const increItem = (i) => {
    let tempCart = cart;
    if (tempCart[i].amt <= 9) {
      tempCart[i].amt += 1;
    }
    updateCart([...tempCart]);
  };

  const decreItem = (i) => {
    let tempCart = cart;
    if (tempCart[i].amt > 1) {
      tempCart[i].amt -= 1;
    }
    updateCart([...tempCart]);
  };

  const expandCard = (i) => {
    console.log(i);
    updateCardExd(true);
    updateCrrtCard(i);
  };
  const shrinkCard = () => {
    updateCardExd(false);
  };

  useEffect(() => {
    console.log(crrtCard);
  }, [crrtCard]);

  return (
    <div className='app'>
      {showCart ? (
        <Cart
          close={closeCart}
          cart={cart}
          total={total}
          decreItem={decreItem}
          increItem={increItem}
          removeItem={removeItem}
          resetCart={resetCart}
        />
      ) : undefined}
      {cardExd ? (
        <Cardexp
          item={crrtCard}
          shrinkCard={shrinkCard}
          add={addItem}
          open={openCart}
        />
      ) : undefined}
      <Header open={openCart} items={cart.length} />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop expandCard={expandCard} />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
