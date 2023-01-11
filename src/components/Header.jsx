import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = ({ open }) => {
  const cart = () => {
    open();
    console.log(1);
  };

  return (
    <>
      <div className='header absolute '>
        <div className='h-24 text-slate-100 w-screen flex items-center justify-between'>
          <div className='logo  text-8xl pt-12 pl-16 font-medium leading-11 '>
            <span className='lights'>lights</span>
            <span className='text-slate-300'>&</span>
            <div>
              <span className='lights pl-4 '> dreams</span>
            </div>
          </div>

          <nav className='nav flex gap-16 text-2xl pr-28 text-slate-300 '>
            <Link to='/'>home</Link>
            <Link to='/Shop'>shop</Link>
            <Link to='/About'>about</Link>
            <FiShoppingBag onClick={cart} className='text-2xl cursor-pointer' />
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
