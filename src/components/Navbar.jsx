import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <section>
      <nav className='bg-black p-3 text-white flex justify-between '>
        <h2 className='text-2xl font-bold' font>
          <Link to='/'>My Shop</Link>
        </h2>
        <div className='flex justify-center text-xl items-center gap-10'>
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
