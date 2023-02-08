import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { animate, motion } from "framer-motion";

const Header = ({ open, items }) => {
  const cart = () => {
    open();
  };

  const showPromp = () => {
    if (items > 0) {
      return (
        <div className='promt pl-2.5'>
          <div className='prompt num w-5 h-5 md:w-6 md:h-6 bg-slate-100 rounded text-black text-base md:text-xl font-bold flex justify-center '>
            {items}
          </div>
          <div className='arrow w-2 h-2 md:w-2.5 md:h-2.5 relative bottom-[14.5px] right-[4px] md:bottom-[16.6px] md:right-[5px] rotate-45 bg-slate-100 '></div>
        </div>
      );
    } else {
      return <div className='empty w-5 h-5 md:w-6 md:h-6 ml-2.5'></div>;
    }
  };

  const transition = {
    delay: 2,
    duration: 2.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const linksCnt = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const links = {
    initial: {
      x: 100,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <>
      <div className='header absolute z-[2]'>
        <div className='h-24 text-slate-100 w-screen flex items-center justify-between sm:flex-row'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className='logo pt-1 pl-2 xs:pt-6 xs:pl-8 text-6xl font-medium leading-7 md:pt-12 lg:pl-16 md:text-8xl md:leading-11'
          >
            <span className='lights'>lights</span>
            <span className='text-slate-300'>&</span>
            <div>
              <span className='lights pl-4 '> dreams</span>
            </div>
          </motion.div>

          <motion.nav
            variants={linksCnt}
            initial='initial'
            animate='animate'
            className='nav flex gap-3 pr-1 xs:gap-6 xs:pr-4 text-xl  lg:pr-28 md:text-2xl md:gap-16 text-slate-300 '
          >
            <div className='overflow-hidden'>
              <motion.div variants={links}>
                <Link to='/'>home</Link>
              </motion.div>
            </div>
            <div className='overflow-hidden'>
              <motion.div variants={links}>
                <Link to='/Shop'>shop</Link>
              </motion.div>
            </div>
            <div className='overflow-hidden'>
              <motion.div variants={links}>
                <Link to='/About'>about</Link>
              </motion.div>
            </div>
            <div className='overflow-hidden'>
              <motion.div
                variants={links}
                className='cart flex overflow-hidden '
              >
                <FiShoppingBag
                  onClick={cart}
                  className='text-xl md:text-2xl cursor-pointer'
                />
                {showPromp()}
              </motion.div>
            </div>
          </motion.nav>
        </div>
      </div>
    </>
  );
};
export default Header;
