import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Lottie from "lottie-react";
import lottieCart from "../assets/animation/lootieCart.json";
const Navbar = () => {
  return (
    <section className='absolute top-0 w-full'>
      <nav className='bg-black p-3 text-white flex justify-between w-full '>
        <h2 className='text-6xl font-serif max-sm:text-4xl font-bold ' font>
          <Link
            className='flex justify-center items-center  font-extrabold'
            to='/'
          >
            <span className='text-xl font-mono'>go</span>S h
            <div className='w-[80px] h-[60px]'>
              <Lottie animationData={lottieCart} />
            </div>
            p
          </Link>
        </h2>
        <div className='flex font-serif font-bold justify-center text-xl items-center gap-10'>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
