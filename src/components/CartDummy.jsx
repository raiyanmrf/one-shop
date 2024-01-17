import React, { useContext, useRef } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import CartItems from "./CartItems";
import { ShoppingBagOpen } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { motion } from "framer-motion";
const CartDummy = () => {
  const { cartItems, setShowCart, addSubtotal, setShowCheck } =
    useContext(Shopcontext);
  const totalAmount = addSubtotal();
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className='fixed z-50 overflow-auto max-md:w-[90%]  drop-shadow-lg w-[55%]  h-[100vh]  right-0 container bg-white  '
    >
      <section className='bg-white   absolute z-20 min-h-screen  flex  w-[100%]  '>
        <section className=' w-full flex flex-col items-center    justify-center py-1'>
          <div
            className='sticky bg-white flex justify-evenly z-30 
           items-center top-0  h-[100px] w-[100%]'
          >
            <button
              className='flex text-sky-950 font-bold text-xl max-md:text-sm items-center justify-center gap-2'
              onClick={() => {
                setShowCart(false);
              }}
            >
              <IoChevronBackSharp /> Go back
            </button>

            {totalAmount > 0 && (
              <>
                {" "}
                <p className='text-xl max-md:text-sm font-semibold'>
                  Subtotal{" "}
                  <span className='text-green-600'>{totalAmount} $</span>
                </p>
                <button
                  className='px-[20px]  font-bold text-center  border-2  hover:bg-white  hover:text-black
                 bg-green-600 text-white'
                  onClick={() => {
                    setShowCheck(true);
                    setShowCart(false);
                  }}
                >
                  Checkout
                </button>
              </>
            )}
          </div>

          <div className='   w-full min-h-[100vh] flex items-center'>
            <div className=' absolute mt-[250px]  h-full  w-full'>
              {PRODUCTS &&
                PRODUCTS.map(product => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItems key={product.id} product={product} />;
                  }
                }).reverse()}
            </div>
            {totalAmount < 1 && (
              <div
                className=' mt-9 absolute top-14 z-20 w-[100%] h-[700px] bg-white
             flex flex-col gap-5 justify-center items-center'
              >
                <p className='flex justify-between text-xl absolute top-[200px] gap-3 items-center'>
                  Your Cart is Empty
                  <ShoppingBagOpen />
                </p>
                <div className='flex absolute bottom-[200px]'></div>
              </div>
            )}
          </div>
        </section>
      </section>
    </motion.main>
  );
};

export default CartDummy;
