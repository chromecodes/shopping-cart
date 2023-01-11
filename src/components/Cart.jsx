import React from "react";
import { motion } from "framer-motion";

const Cart = ({ close }) => {
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
      className='cartCnt absolute flex h-screen w-screen bg-transparent z-[3]'
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
        className='cart w-2/5 bg-zinc-900'
      ></motion.div>
    </motion.div>
  );
};

export default Cart;
