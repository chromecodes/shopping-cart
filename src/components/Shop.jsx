import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Products } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const grow = {
  rest: { width: "0" },
  hover: { width: "112px" },
};

const Shop = ({ open, add }) => {
  const [items, setItems] = useState([...shuffleArray(Products)]);
  const [current, setCurrent] = useState("All Products");

  const createItem = () => {
    return items.map((item) => {
      return <Card item={item} open={open} add={add} />;
    });
  };

  const filterItems = (x) => {
    const filtered = Products.filter((product) => {
      return product.type === x;
    });
    setCurrent(x + "s");
    setItems(filtered);
  };

  const fromCnt = {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
  };

  const fromTop = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const fromLeft = {
    initial: {
      x: -200,
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          delayChildren: 0.6,
          staggerChildren: 0.2,
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className='shop text-slate-100 h-screen w-screen bg-black-100'
      >
        <div className='pt-32 flex h-screen w-screen'>
          <div className='mt-8 catgories text-xl  w-1/5 '>
            <div className='overflow-hidden'>
              <motion.div
                variants={fromTop}
                animate='animate'
                initial='initial'
                className='text-4xl text-zinc-700'
              >
                Shop
              </motion.div>
            </div>
            <motion.div
              variants={fromCnt}
              animate='animate'
              initial='initial'
              className='text-3xl pl-12 flex'
            >
              <div className='w-6 overflow-hidden'>
                <motion.div variants={fromLeft}>/</motion.div>
              </div>
              <div className='w-64 overflow-hidden'>
                <motion.div variants={fromLeft}>{current}</motion.div>
              </div>
            </motion.div>

            <div className='mt-8 pr-5 text-3xl flex flex-col items-end gap-y-5'>
              <motion.div whileHover='hover' initial='rest' animate='rest'>
                <div
                  onClick={() => {
                    filterItems("Lamp");
                  }}
                  className='w-28 cursor-pointer'
                >
                  lamps
                </div>
                <motion.div
                  variants={grow}
                  transition={{ duration: 0.2 }}
                  className='h-1 bg-slate-100 rounded-2xl'
                ></motion.div>
              </motion.div>

              <motion.div whileHover='hover' initial='rest' animate='rest'>
                <div
                  onClick={() => {
                    filterItems("Light");
                  }}
                  className='w-28 cursor-pointer'
                >
                  lights
                </div>
                <motion.div
                  variants={grow}
                  transition={{ duration: 0.2 }}
                  className='h-1 bg-slate-100 rounded-2xl'
                ></motion.div>
              </motion.div>
            </div>
          </div>
          <div className='shelf text-2xl w-4/5 h-full'>
            <div className='mt-8 pl-12 border-l-2 border-zinc-800 h-[95%] '>
              <AnimatePresence>
                <motion.div
                  layout
                  className='cardContainer flex gap-12 flex-wrap h-full'
                >
                  {createItem()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Shop;
