import React, { useState } from "react";
import { VscTag } from "react-icons/vsc";

const Card = ({ item, open, add }) => {
  const [aaa, setaaa] = useState(false);

  const expand = (e) => {
    setaaa(!aaa);
  };

  const shrink = (e) => {
    if (e === "cardWindow z-[1]") {
      setaaa(!aaa);
    }
  };
  const close = (e) => {
    setaaa(!aaa);
  };
  const window = {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    top: "0",
    left: "0",
    background:
      "radial-gradient(circle, rgba(67,67,67,0.4) 0%, rgba(0,0,0,0.2) 100%)",
    backdropFilter: "blur(0.5rem)",
  };

  const hidden = {
    display: "none",
  };

  const cardCnt = {
    position: "relative",
    width: "45%",
    height: "53%",
    backgroundColor: "#18181b",
    top: "24%",
    left: "28%",
  };

  const img = {
    height: "40%",
  };

  const addItem = () => {
    add(item);
  };

  const checkoutItem = () => {
    add(item);
    open();
  };

  return (
    <div className='card rounded-3xl '>
      <div className='expandCard ' style={aaa ? {} : hidden}>
        <div
          className='cardWindow z-[1]'
          style={aaa ? window : {}}
          onClick={(e) => {
            shrink(e.target.className);
          }}
        >
          <div
            className='expandCard rounded-3xl flex '
            style={aaa ? cardCnt : hidden}
          >
            <img className='h-full rounded-l-3xl' src={item.imgs} alt='' />
            <div className='sideCnt flex flex-col justify-between'>
              <div className='top'>
                <div className='name text-3xl text-zinc-600 p-5'>
                  {item.type}
                </div>

                <div className='name text-2xl pl-5'>{item.name}</div>
                <div className='name text-base text-zinc-300 pl-5'>
                  {item.des}
                </div>
              </div>

              <div className='buttons '>
                <button
                  onClick={(e) => {
                    addItem();
                    close();
                  }}
                  className='add p-5 w-1/2 bg-zinc-800 '
                >
                  Add to Cart
                </button>
                <button
                  onClick={checkoutItem}
                  className='out p-5 w-1/2 bg-slate-600 rounded-br-3xl '
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='shrinkCard cursor-pointer'>
        <div className='w-56 rounded-3xl '>
          <img
            onClick={expand}
            className='rounded-t-3xl'
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className='bg-zinc-900 p-3  w-56 text-xl rounded-b-2xl'>
          <div className='t'> {item.name} </div>
          <div className='num font-bold flex gap-x-2 justify-end'>
            <VscTag /> {item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
