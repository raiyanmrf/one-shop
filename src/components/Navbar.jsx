import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Lottie from "lottie-react";
import lottieCart from "../assets/animation/lootieCart.json";
import { FaCircleNotch } from "react-icons/fa";
const Navbar = () => {
  return (
    <section className='absolute top-0 w-full'>
      <nav className=' p-3 text-slate-900 flex justify-between w-full '>
        <h2 className='text-4xl font-serif max-sm:text-4xl font-bold ' font>
          <Link
            className='flex justify-center items-center  font-extrabold'
            to='/'
          >
            B
            <div className='text-red-600 relative z-20'>
              <FaCircleNotch />
            </div>
            A T S
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
