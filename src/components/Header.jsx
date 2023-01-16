import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

const Header = ({ open, items }) => {
  const cart = () => {
    open();
    console.log(1);
  };

  const showPromp = () => {
    if (items > 0) {
      return (
        <div className='promt pl-2.5'>
          <div className='block num  w-6 h-6 bg-slate-100 rounded text-black text-xl font-bold flex justify-center '>
            {items}
          </div>
          <div className='arrow w-2.5 h-2.5 relative bottom-[16.6px] right-[5px] rotate-45 bg-slate-100  '></div>
        </div>
      );
    } else {
      return <div className='empty w-6 h-6 ml-2.5'></div>;
    }
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
            <div className='cart flex'>
              <FiShoppingBag
                onClick={cart}
                className='text-2xl cursor-pointer'
              />
              {showPromp()}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
