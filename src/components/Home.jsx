import React, { useEffect } from "react";
import { motion, useAnimation, useTime } from "framer-motion";
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

  return (
    <>
      <div className='home text-amber-100  h-screen w-screen bg-black'>
        <div className=' h-screen w-screen bg-cover bg-no-repeat bg-right bg-[url("./assets/bgs/bbb.png")]'>
          <div className='pt-64 pl-52'>
            <span className='text-slate-100 lights'>Lights</span>
            <span className='a2 opacity-60'> up your</span>
            <br />
            <span className=' pl-24 b opacity-60'> paths of </span>
            <motion.span
              animate={control}
              className='text-slate-100 opacity-20'
            >
              Dreams
            </motion.span>
          </div>
          <motion.button
            whileHover={{
              textShadow: "0px 0px 20px #fff, 0px 0px 40px #fff",
            }}
            className='absolute left-1/4 bottom-44 text-3xl px-8 py-4 border-2 rounded-3xl border-neutral-700 '
          >
            shop now
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Home;
