import React from "react";

import { FaGithub } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import {
  GrInstagram,
  GrFacebookOption,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";
import { motion } from "framer-motion";

const About = () => {
  const aniCnt = {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.4,
      },
    },
  };
  const staggerTransition = {
    delayChildren: 0.1,
    staggerChildren: 0.4,
  };

  const fromBottom = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
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
        delayChildren: 0.1,
        staggerChildren: 0.4,
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const grow = {
    initial: {
      scale: 0.2,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  const growH = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "100%",
      transition: {
        duration: 1,
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
        duration: 1,
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
        className='about text-slate-100 h-screen w-screen bg-cover bg-[url("./assets/bgs/bgA2.png")] '
      >
        <motion.div className='w-full h-full grid grid-cols-4 grid-rows-4'>
          <motion.div className='leftAt row-span-3 flex flex-col items-center text-4xl'>
            <motion.div className='line grow w-full flex flex-col justify-center items-center yfrost'>
              <motion.div className='l1'></motion.div>
              <motion.div className='l2 text-2xl w-72 text-center '>
                “Hope is being able to see that there is light despite all of
                the darkness.” <br /> — Desmond Tutu
              </motion.div>
            </motion.div>
          </motion.div>
          <div className='ltbtAt yfrost block row-4'>
            <div className='w-full h-full text-2xl p-5 flex flex-col justify-end items-center'>
              <div className='overflow-hidden pt-2 pr-2'>
                <motion.div
                  variants={fromBottom}
                  animate='animate'
                  initial='initial'
                  className='links flex flex-wrap gap-x-1.5'
                >
                  The
                  <motion.a
                    href='https://www.theodinproject.com/'
                    className='odin text-amber-500'
                  >
                    Odin
                  </motion.a>
                  Project
                  <a href='https://github.com/chromecodes/shopping-cart'>
                    <BiCodeAlt className='Code' />
                  </a>
                  chromecodes
                  <a href='https://github.com/chromecodes'>
                    <FaGithub className='FaGithub' />
                  </a>
                </motion.div>
              </div>
              <div className='overflow-hidden'>
                <motion.div
                  variants={fromBottom}
                  animate='animate'
                  initial='initial'
                  className='credit text-amber-500'
                >
                  Credits
                </motion.div>
              </div>
            </div>
          </div>

          <div className='midAt  row-span-3 col-span-3'> </div>
          <div className='bttmAt text-3xl glasses col-span-3'>
            <motion.div
              variants={fade}
              animate='animate'
              initial='initial'
              className='section yfrostr w-full h-full flex justify-center p-4'
            >
              <div className='left h-full w-1/3'></div>
              <div className='mid w-1/3 flex '>
                <div className='news text-xl '>
                  <div className='l1'>Join our</div>
                  <label htmlFor='email'>News letter</label>
                  <div className=' mailCnt text-xl pt-2 rounded-xl flex'>
                    <input
                      className='px-3 border-2 text-zinc-900 border-amber-600 rounded-l-xl focus:outline-none'
                      type='email'
                      name='email'
                      id='email'
                      placeholder='E-mail'
                    />
                    <button className='bg-amber-600 px-6 rounded-r-xl py-2'>
                      Join
                    </button>
                  </div>
                </div>
              </div>
              <div className='right h-full w-1/3 flex justify-center items-center '>
                <motion.div className='icons flex gap-6'>
                  <motion.div>
                    <GrInstagram className='h-8 w-8 cursor-pointer' />
                  </motion.div>
                  <motion.div>
                    <GrTwitter className='h-8 w-8 cursor-pointer' />
                  </motion.div>
                  <motion.div>
                    <GrFacebookOption className='h-8 w-8 cursor-pointer' />
                  </motion.div>
                  <motion.div>
                    <GrPinterest className='h-8 w-8 cursor-pointer' />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
