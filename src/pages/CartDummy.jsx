import React, { useContext, useRef } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import CartItems from "../components/CartItems";
import { ShoppingBagOpen } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
const CartDummy = () => {
  const { cartItems, setShowCart, addSubtotal } = useContext(Shopcontext);
  const totalAmount = addSubtotal();
  const navigate = useNavigate();

  return (
    <main className='fixed overflow-auto max-md:w-[80%]  drop-shadow-lg w-[45%]  h-[100vh]  right-0 container bg-white z-30 '>
      <section className='bg-white   absolute z-20 min-h-screen  flex  w-[100%]  '>
        <section className=' w-full flex flex-col items-center    justify-center py-1'>
          <div
            className='sticky bg-white flex justify-center z-30
           items-center top-0  h-[100px] w-[100%]'
          >
            <button
              className='flex text-sky-950 font-bold text-xl items-center justify-center gap-2'
              onClick={() => {
                setShowCart(false);
              }}
            >
              <IoChevronBackSharp /> Back to Cart
            </button>
          </div>

          <div className='   w-full min-h-[300vh] flex items-center'>
            <div className=' absolute mt-[110px]  h-full  w-full'>
              {PRODUCTS &&
                PRODUCTS.map(product => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItems key={product.id} product={product} />;
                  }
                }).reverse()}
            </div>
          </div>
          {totalAmount > 0 ? (
            <div
              className=' fixed mt-9  z-20 w-[100%] bg-white
             bottom-0 flex flex-col gap-5 justify-center items-center'
            >
              <p className='text-xl max-md:text-lg font-semibold'>
                Subtotal <span className='text-green-600'>{totalAmount} $</span>
                <hr />
              </p>
              <div className='flex justify-evenly gap-5'>
                <button
                  onClick={() => {
                    navigate("/shop");
                    setShowCart(false);
                  }}
                  className='px-3 py-2 font-semibold text-center  border-2  hover:bg-white  hover:text-black bg-black text-white'
                >
                  Continue shopping
                </button>
                <button
                  className='px-3 py-2 font-semibold text-center  border-2  hover:bg-white  hover:text-black
                 bg-red-600 text-white'
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
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
        </section>
      </section>
    </main>
  );
};

export default CartDummy;
