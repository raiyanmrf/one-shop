import React, { useState } from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { IoChevronBackSharp } from "react-icons/io5";
import { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [visa, setvisa] = useState(false);
  const [master, setmaster] = useState(false);
  const [ame, setame] = useState(false);
  const [paypal, setpaypal] = useState(false);
  const { setShowCheck, setShowCart } = useContext(Shopcontext);
  const nav = useNavigate();
  return (
    <>
      {" "}
      <div>
        <Toaster />
      </div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        onSubmit={() => {
          nav("/");
          toast.success("Payment is Successful");
        }}
        className='flex absolute container z-40 overscroll-y-scroll bg-white  top-0 right-0 gap-5
     py-8 justify-start items-start flex-col max-sm:w-[90%]  max-w-[500px] px-1 text-sm  '
      >
        {/* Billing Address Section */}
        <div
          className='fixed bg-white flex  justify-center items-center  z-30
            w-full left-[30%] top-0 h-[30px]'
        >
          <button
            className='flex text-sky-950 font-bold text-sm items-center justify-center gap-2'
            onClick={e => {
              e.stopPropagation();

              setShowCheck(false);
              setShowCart(true);
            }}
          >
            <IoChevronBackSharp /> Back to Cart
          </button>
        </div>

        <div className='max-w-sm w-[100%] mx-auto '>
          <h2 className='text-sm font-bold mb-4'>Billing Address</h2>
          <div>
            <label htmlFor='fullName' className='block mb-2'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              className='w-full mb-4 p-2 border'
              placeholder='John Doe'
              required
            />

            <label htmlFor='email' className='block mb-2'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              className='w-full mb-4 p-2 border'
              placeholder='john.doe@example.com'
              required
            />

            <label htmlFor='cityStateZip' className='block mb-2'>
              City, State, Zip Code
            </label>
            <input
              type='text'
              id='cityStateZip'
              className='w-full mb-4 p-2 border'
              placeholder='City, State, 12345'
              required
            />
          </div>
        </div>

        {/* Payment Section */}
        <div className='max-w-sm mx-auto w-full'>
          <h2 className='text-sm font-bold mb-4'>Payment Section</h2>
          <div>
            <label htmlFor='cardType' className='block mb-2'>
              Select a card
            </label>
            <div className='flex space-x-4 mb-4'>
              <button
                className={`bg-transparent ${
                  visa && `transform scale-125 text-green-600`
                }`}
                onClick={e => {
                  e.preventDefault();
                  setvisa(!visa);
                  setmaster(false);
                  setpaypal(false);
                  setame(false);
                }}
              >
                <FaCcVisa alt='Visa' className='w-8 h-8' />
              </button>
              <button
                className={`bg-transparent ${
                  master && `transform scale-125 text-green-600`
                }`}
                onClick={e => {
                  e.preventDefault();
                  setvisa(false);
                  setmaster(!master);
                  setpaypal(false);
                  setame(false);
                }}
              >
                <FaCcMastercard alt='Mastercard' className='w-8 h-8' />
              </button>
              <button
                className={`bg-transparent ${
                  ame === true && `transform scale-125 text-green-600`
                }`}
                onClick={e => {
                  e.preventDefault();
                  setvisa(false);
                  setmaster(false);
                  setpaypal(false);
                  setame(!ame);
                }}
              >
                <SiAmericanexpress alt='American Express' className='w-8 h-8' />
              </button>
              <button
                className={`bg-transparent ${
                  paypal && `transform scale-125 text-green-600`
                }`}
                onClick={e => {
                  e.preventDefault();
                  setvisa(false);
                  setmaster(false);
                  setpaypal(!paypal);
                  setame(false);
                }}
              >
                <FaCcPaypal alt='PayPal' className='w-8 h-8' />
              </button>
            </div>

            <label htmlFor='nameOnCard' className='block mb-2'>
              Name on Card
            </label>
            <input
              type='text'
              id='nameOnCard'
              className='w-full mb-4 p-2 border'
              placeholder='John Doe'
              required
            />

            <div className='flex mb-4'>
              <div className='w-1/2 mr-2'>
                <label htmlFor='CVV' className='block mb-2'>
                  CVV
                </label>
                <input
                  type='text'
                  id='CVV'
                  className='w-full p-2 border'
                  placeholder='CVV'
                  required
                />
              </div>

              <div className='w-1/2 ml-2'>
                <label htmlFor='expDAte' className='block mb-2'>
                  Exp Date
                </label>
                <input
                  type='text'
                  id='expDAte'
                  className='w-full p-2 border'
                  placeholder='DD/MM/YY'
                  required
                />
              </div>
            </div>
          </div>
          <button
            className='bg-green-700 font-mono font-bold mt-10 whitespace-nowrap w-full px-[2rem] py-2 text-white  rounded-full'
            type='submit'
          >
            Proceed to Checkout
          </button>
        </div>
      </motion.form>
    </>
  );
};

export default Checkout;
