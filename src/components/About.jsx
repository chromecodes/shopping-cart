import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className='home text-slate-100 h-screen w-screen bg-cover bg-[url("./assets/bgs/bgA2.png")] '>
        <div className='w-full h-full grid grid-cols-4 grid-rows-4'>
          <div className='leftAt row-span-4 flex flex-col items-center text-4xl'>
            <div className='line grow mt-32 w-full flex flex-col items-center yfrost'>
              <div className='l1  '>Your</div>
              <div className='l2 text-2xl w-72 text-center '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                officia consequatur maxime harum consectetur alias, quasi hic
                adipisci corrupti facere enim tenetur odio laudantium tempora
                recusandae illum in dolorem blanditiis?
              </div>
            </div>
            <div className='block w-full h-1/4 text-2xl'>
              <div className='frost w-full h-full p-5 flex justify-center items-end'>
                <div className='links flex flex-wrap gap-x-1.5'>
                  The{}
                  <motion.a
                    href='https://www.theodinproject.com/'
                    className='odin text-amber-400'
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
                </div>
              </div>
            </div>
          </div>
          <div className='midAt row-span-3'> </div>
          <div className='bttmAt glasses col-span-3'>
            <div className='section yfrostr w-full h-full'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
