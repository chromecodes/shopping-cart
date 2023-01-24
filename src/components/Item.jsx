import React, { useEffect } from "react";
import { VscTag } from "react-icons/vsc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";

const Item = ({ item, i, removeItem, increItem, decreItem }) => {
  return (
    <>
      <div className='itemCnt h-36 flex justify-between w-[95%]'>
        <img className='img  rounded-full' src={item.img} />
        <div className='detail flex flex-col gap-1'>
          <div className='name text-4xl w-58'>{item.name} </div>
          <div className='num flex gap-4 text-2xl font-semibold justify-end'>
            <VscTag /> {item.price}
          </div>
          <div className='counter flex gap-4 text-3xl items-center justify-center'>
            <button className='dcre glass rounded-full'>
              <IoIosArrowBack
                onClick={() => {
                  decreItem(i);
                }}
                className='pr-1'
              />
            </button>
            <div className='itemAmt text-2xl'>{item.amt} </div>
            <button className='incr glass rounded-full'>
              <IoIosArrowForward
                onClick={() => {
                  increItem(i);
                }}
                className='pl-1'
              />
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            removeItem(i);
          }}
          className='closeBtn'
        >
          <button className='pl-1 text-2xl'>
            <RiCloseCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
