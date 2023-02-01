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
          <div className='md:w-40 w-28 xl:w-56 rounded-3xl '>
            <img
              onClick={expand}
              className='rounded-t-xl xl:rounded-t-3xl'
              src={item.img}
              alt={item.name}
            />
          </div>
          <div className='w-28 md:w-40 xl:w-56 bg-zinc-900 p-3 leading-5 h-20 md:h-auto text-base xl:text-xl rounded-b-xl xl:rounded-b-3xl'>
            <div className='t'> {item.name} </div>
            <div className='font-bold flex justify-end items-center'>
              <VscTag className='mr-2' />{" "}
              <span className='itemAmt font-light mr-1 text-lg'>$</span>
              <span className='num pt-1'>{item.price} </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
