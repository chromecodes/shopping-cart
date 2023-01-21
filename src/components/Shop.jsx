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

const Shop = ({ open, add, expandCard }) => {
  const [items, setItems] = useState([...Products]);
  const [current, setCurrent] = useState("All Products");

  const createItem = () => {
    return items.map((item) => {
      return <Card item={item} open={open} add={add} expandCard={expandCard} />;
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
        delayChildren: 0.1,
        staggerChildren: 0.4,
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
        duration: 0.4,
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
        duration: 0.4,
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
        duration: 2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        className='shop relative z-[1] text-slate-100 pt-32 flex h-screen w-screen bg-black-100'
      >
        <motion.div
          variants={fromCnt}
          animate='animate'
          initial='initial'
          transition='transition'
          className='mt-8 catgories text-xl  w-1/5 '
        >
          <div className='overflow-hidden'>
            <motion.div variants={fromTop} className='text-4xl text-zinc-700'>
              Shop
            </motion.div>
          </div>

          <motion.div>
            <div className='text-3xl pl-12 flex'>
              <div className='w-6 overflow-hidden'>
                <motion.div variants={fromLeft} transition={{ duration: 0.2 }}>
                  /
                </motion.div>
              </div>
              <div className='w-64 overflow-hidden'>
                <motion.div variants={fromLeft}>{current}</motion.div>
              </div>
            </div>

            <motion.div
              variants={fade}
              className='mt-8 pr-5 text-3xl flex flex-col items-end gap-y-5'
            >
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
            </motion.div>
          </motion.div>
        </motion.div>

        <div className='shelf text-2xl w-4/5 h-full'>
          <div className='mt-8 pl-12 border-l-2 border-zinc-800 h-[95%] '>
            <motion.div
              variants={fromCnt}
              initial='initial'
              animate='animate'
              className='cardContainer flex gap-12 flex-wrap h-full'
            >
              {createItem()}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Shop;
