import React from "react";
import { motion } from "framer-motion";
import Item from "./Item";

const Cart = ({ close, cart }) => {
  const displayItems = () => {
    if (cart.length === 0) {
      return <div className='text-6xl'> Your Cart is Empty</div>;
    }
    return cart.map((item) => {
      return <Item item={item} />;
    });
  };

  const cartWinOpen = {
    orgin: {
      background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%)",
      backdropFilter: "blur(0rem)",
    },
    present: {
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
      backdropFilter: "blur(0.2rem)",
    },
  };

  const cartOpen = {
    orgin: {
      x: 100,
      background: "rgba(24,24,27,0.1)",
      backdropFilter: "blur(0rem)",
    },
    present: {
      x: 0,
      background: "rgba(24,24,27,0.98)",
      backdropFilter: "blur(0.2rem)",
    },
  };
  return (
    <motion.div
      initial={"orgin"}
      animate={"present"}
      className='cartCnt absolute flex h-screen w-screen bg-transparent z-[3] text-slate-200'
    >
      <motion.div
        onClick={close}
        variants={cartWinOpen}
        transition={{
          duration: 0.1,
          ease: [0.51, 0.92, 0.24, 1.15],
        }}
        className='cartWindow w-3/5'
      ></motion.div>

      <motion.div
        variants={cartOpen}
        transition={{
          duration: 0.05,
          ease: [0.51, 0.92, 0.24, 1.15],
        }}
        className='cart w-2/5 bg-zinc-900 p-10 flex flex-col gap-y-8 justify-between items-center'
      >
        <div className='cartName pt-10 pl-10 text-5xl font-inherit'>
          Your Cart
        </div>
        <div className='cartItems flex grow flex-wrap over gap-5'>
          {displayItems()}
        </div>
        <div className='total text-4xl '> Total :</div>
        <motion.button
          whileTap={{ scale: "0.9" }}
          whileHover={{
            boxShadow: "0px 0px 10px 0px #fcd34d",
          }}
          className='out bg-Black text-amber-200 text-4xl rounded-2xl border border-amber-200 w-64 p-5'
        >
          Checkout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Cart;