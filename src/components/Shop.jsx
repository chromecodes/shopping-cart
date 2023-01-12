import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Products } from "./data";
import { motion } from "framer-motion";

const Shop = ({ open, add }) => {
  const [items, setItems] = useState(Products);
  const [current, setCurrent] = useState("All Products");

  const createItem = () => {
    return items.map((item) => {
      return <Card item={item} open={open} add={add} />;
    });
  };

  const grow = {
    rest: { width: "0" },
    hover: { width: "112px" },
  };

  const filterItems = (x) => {
    const filtered = Products.filter((product) => {
      return product.type === x;
    });
    setCurrent(x + "s");

    setItems(filtered);
  };

  return (
    <>
      <div className='shop text-slate-100 h-screen w-screen bg-black-100'>
        <div className='pt-32 flex h-screen w-screen'>
          <div className='mt-8 catgories text-xl  w-1/5 '>
            <div className='text-4xl text-zinc-700'>Shop</div>
            <div className='text-3xl pl-12'>/ {current}</div>

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
              <div className='cardContainer flex gap-12 flex-wrap h-full'>
                {createItem()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
