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
        className='shop relative z-[1] text-slate-100 pt-16 md:pt-32 flex flex-col md:flex-row h-screen w-screen bg-black-100'
      >
        <motion.div
          variants={fromCnt}
          animate='animate'
          initial='initial'
          transition='transition'
          className='mt-8 catgories text-xl w-full md:w-1/5 '
        >
          <div className='overflow-hidden'>
            <motion.div
              variants={fromTop}
              className='xl:text-4xl md:text-3xl text-2xl text-zinc-700'
            >
              Shop
            </motion.div>
          </div>

          <motion.div>
            <div className='xl:text-3xl md:text-2xl text-xl pl-12 flex'>
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
              className=' md:mt-8 pr-5 flex md:pl pl-28 md:flex-col items-end gap-y-5'
            >
              <motion.div whileHover='hover' initial='rest' animate='rest'>
                <div
                  onClick={() => {
                    filterItems("Lamp");
                  }}
                  className='w-28 cursor-pointer xl:text-3xl md:text-2xl text-xl md:text-left text-center'
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
                  className='w-28 cursor-pointer xl:text-3xl md:text-2xl text-xl md:text-left text-center'
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

        <div className='shelf text-2xl w-full h-4/5 md:w-4/5 md:h-[99.5%]'>
          <div className='mt-2 md:mt-8 pl-6 md:pl-12 border-l-2 border-zinc-800 h-[99%] '>
            <motion.div
              variants={fromCnt}
              initial='initial'
              animate='animate'
              className='cardContainer flex xl:gap-12 md:gap-6 gap-4 flex-wrap h-full'
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
