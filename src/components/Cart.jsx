import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Item from "./Item";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

const Cart = ({
  close,
  cart,
  total,
  removeItem,
  increItem,
  decreItem,
  sayThanks,
}) => {
  const displayItems = () => {
    if (cart.length === 0) {
      return (
        <div className='text-4xl lg:text-6xl text-center w-full'>
          {" "}
          Your Cart is Empty
        </div>
      );
    }
    return cart.map((item, index) => {
      return (
        <Item
          item={item}
          key={index}
          total={total}
          i={index}
          decreItem={decreItem}
          increItem={increItem}
          removeItem={removeItem}
        />
      );
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
      background: "rgba(24,24,27,0.82)",
      backdropFilter: "blur(1rem)",
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={"orgin"}
        animate={"present"}
        exit={"orgin"}
        className='cartCnt absolute flex h-screen w-screen bg-transparent z-[4] text-slate-200'
      >
        <motion.div
          onClick={close}
          variants={cartWinOpen}
          transition={{
            duration: 0.1,
            ease: [0.51, 0.92, 0.24, 1.15],
          }}
          className='cartWindow w-[0%] lg:w-3/5'
        ></motion.div>

        <motion.div
          variants={cartOpen}
          transition={{
            duration: 0.05,
            ease: [0.51, 0.92, 0.24, 1.15],
          }}
          className='cart w-full lg:w-2/5 bg-zinc-900 p-10 flex flex-col gap-y-8 justify-between items-center'
        >
          <div className='toper flex justify-between w-full '>
            <div className='cartName pl-6 text-4xl lg:text-5xl font-inherit'>
              Your Cart
            </div>
            <RiCloseFill
              onClick={close}
              className=' h-10 w-10 text-zinc-500 cursor-pointer'
            />
          </div>

          <div className='cartItems flex grow w-[90%]'>{displayItems()}</div>
          <div className='total text-2xl lg:text-4xl '>
            Total : <span className='num font-bold'>{total}</span>
          </div>

          <motion.button
            onClick={() => {
              if (cart.length > 0) {
                close();
                sayThanks();
              }
            }}
            whileTap={{ scale: "0.9" }}
            whileHover={{
              boxShadow: "0px 0px 10px 0px #fcd34d",
            }}
            className='out bg-Black text-amber-200 text-2xl lg:text-4xl rounded-2xl border border-amber-200 w-[64%] p-2 lg:p-5'
          >
            {cart.length > 0 ? (
              "Checkout"
            ) : (
              <Link onClick={close} to='/shop'>
                Shop
              </Link>
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
