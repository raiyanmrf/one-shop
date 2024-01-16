import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { FaCircleNotch } from "react-icons/fa";
import { Shopcontext } from "../hooks/shop-context";
import { useContext } from "react";

const Navbar = () => {
  const { cartItems, showcart, setShowCart } = useContext(Shopcontext);
  const totalQuantity = Object.values(cartItems).reduce(
    (accumulator, itemValues) => accumulator + itemValues,
    0
  );
  return (
    <section className='fixed z-40 bg-white top-0 w-full'>
      <nav className='px-7 py-3 text-slate-900 flex justify-between w-full '>
        <h2 className='text-4xl font-serif max-sm:text-4xl font-bold '>
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
        <div className='flex font-serif font-bold justify-center text-4xl items-center gap-10'>
          <div
            onClick={() => {
              setShowCart(!showcart);
            }}
          >
            <ShoppingCart />
            <span className='navBarCounter'>
              {totalQuantity > 0 && totalQuantity}
            </span>
          </div>
        </div>
        <div className='absolute top-9 right-1'></div>
      </nav>
    </section>
  );
};

export default Navbar;
