import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import Cart from "./components/Cart";

export default function App() {
  const [cart, updateCart] = useState([]);
  const [showCart, updateShowCart] = useState(false);
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

  return (
    <>
      <div className='app bg-slate-100'>
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
        <Header open={openCart} items={cart.length} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/Shop'
            element={<Shop open={openCart} add={addItem} />}
          />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </>
  );
}
