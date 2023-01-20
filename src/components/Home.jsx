import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const control = useAnimation();

  const blink = () => {
    control.set({
      opacity: 1,
      textShadow: "0px 0px 20px #fff",
    });
    control.start({
      opacity: 0.2,
      textShadow: "0px 0px 20px #000",
      transition: {
        duration: 0.75,
        repeat: 1,
      },
    });
  };

  useEffect(() => {
    let int = setInterval(() => {
      blink();
    }, 5000);

    return () => {
      clearInterval(int);
    };
  });

  const fromSideCnt = {
    animate: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const fromSide = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
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
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className='home text-amber-400 h-screen w-screen bg-black'
      >
        <div className=' h-screen w-screen bg-cover bg-no-repeat bg-right bg-[url("./assets/bgs/bbb.png")]'>
          <motion.div
            variants={fromSideCnt}
            initial='initial'
            animate='animate'
            className='pt-64 pl-52'
          >
            <div className='flex gap-5'>
              <div className='overflow-hidden'>
                <motion.div
                  variants={fromSide}
                  className='text-slate-100 lights'
                >
                  Lights
                </motion.div>
              </div>
              <div className='overflow-hidden'>
                <motion.div variants={fromSide} className='a2 opacity-60'>
                  up your
                </motion.div>
              </div>
            </div>
            <div className='flex gap-5'>
              <div className='overflow-hidden'>
                <motion.div variants={fromSide} className=' pl-24 b opacity-60'>
                  paths of
                </motion.div>
              </div>
              <motion.div
                variants={fromSide}
                animate={control}
                className='text-slate-100 opacity-20'
              >
                Dreams
              </motion.div>
            </div>
          </motion.div>
          <div className='ml-[25%] mt-28 w-[15%] h-24 flex justify-center items-center overflow-hidden'>
            <motion.button
              variants={fromSide}
              className='bg-amber-400 text-[black] text-4xl px-8 py-4 border-2 rounded-3xl border-neutral-700 hover:bg-[black] hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_1px_rgba(255,165,48,0.8)] active:scale-90'
              initial={{
                y: 500,
              }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 0.9,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
            >
              <Link to='/shop'>shop now</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
