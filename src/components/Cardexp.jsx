import { animate, AnimatePresence, motion } from "framer-motion";
import React from "react";

const Cardexp = ({ item, shrinkCard, open, add }) => {
  const window = {
    position: "absolute",
    height: "100vh",
    width: "100vw",
    top: "0",
    left: "0",
    // background:
    //   "radial-gradient(circle, rgba(67,67,67,0.4) 0%, rgba(0,0,0,0.2) 100%)",
    // backdropFilter: "blur(0.5rem)",
    zIndex: "3",
  };
  const cardCnt = {
    position: "relative",
    width: "45%",
    height: "53%",
    backgroundColor: "#18181b",
    top: "24%",
    left: "28%",
  };
  const shrink = (e) => {
    if (e === "cardWindow") {
      shrinkCard();
    }
  };
  const addItem = () => {
    add(item);
  };

  const checkoutItem = () => {
    add(item);
    open();
  };

  const bgWindow = {
    intial: {
      backdropFilter: "blur(0rem)",
    },
    animate: {
      backdropFilter: "blur(0.5rem)",
      transition: {
        duration: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const grow = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          className='cardWindow'
          variants={bgWindow}
          animate='animate'
          initial='initial'
          exit='initial'
          style={window}
          onClick={(e) => {
            shrink(e.target.className);
          }}
        >
          <motion.div
            variants={grow}
            className='expandCard text-2xl rounded-3xl flex '
            style={cardCnt}
          >
            <img className='h-full rounded-l-3xl' src={item.imgs} alt='' />
            <div className='sideCnt flex flex-col justify-between'>
              <div className='top'>
                <div className='name text-3xl  text-zinc-600 p-5'>
                  {item.type}
                </div>

                <div className='name text-2xl text-slate-500  pl-5 pb-2'>
                  {item.name}
                </div>
                <div className='name text-base text-zinc-300 pl-5'>
                  {item.des}
                </div>
              </div>
              <div className='buttons text-amber-50 '>
                <button
                  onClick={() => {
                    addItem();
                    shrinkCard();
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
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Cardexp;
