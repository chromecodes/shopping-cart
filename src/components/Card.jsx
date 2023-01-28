import { motion } from "framer-motion";
import React, { useState } from "react";
import { VscTag } from "react-icons/vsc";

const Card = ({ item, open, add, expandCard }) => {
  const expand = () => {
    expandCard(item);
  };
  const fromBottom = {
    initial: {
      y: "600%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className='overflow-hidden'>
      <motion.div variants={fromBottom} className='card rounded-3xl '>
        <div className='shrinkCard cursor-pointer'>
          <div className='w-28 rounded-3xl '>
            <img
              onClick={expand}
              className='rounded-t-3xl'
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className='bg-zinc-900 p-3 h-24 w-28 text-xl rounded-b-2xl'>
            <div className='t'> {item.name} </div>
            <div className='num font-bold flex gap-x-2 justify-end'>
              <VscTag /> {item.price}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
