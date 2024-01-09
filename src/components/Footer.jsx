import React from "react";
import { banner } from "../assets/Product";
const Footer = () => {
  return (
    <section
      className=' mt-[20px] relative flex 
     text-white justify-between gap-10 items-center px-1 bg-red-600 h-[400px] w-full'
    >
      <div className='flex flex-col gap-10'>
        <h3 className='text-xl  font-bold sm:absolute top-5'>20% off </h3>

        <div className='flex-col  justify-center items-center'>
          <h1 className=' relative max-sm:text-8xl z-20 text-[110px] font-bold text-white'>
            FINE
          </h1>

          <h1
            className=' relative max-sm:text-8xl  text-[100px] sm:bottom-10
 font-bold text-white'
          >
            SMILE
          </h1>
        </div>

        <h3>27 Nov to 27 Dec</h3>
      </div>

      <div className='flex flex-col gap-[60px]'>
        <div>
          <h2 className='text-6xl max-sm:text-2xl absolute top-2 z-20 right-5 font-bold '>
            Summer Sale
          </h2>
          <p className='font-l font-light absolute top-24 right-14 max-lg:hidden'>
            Company that grows from 270 to 480 employees
            <br /> in the last 12 months{" "}
          </p>
        </div>
        <p
          className='text-3xl absolute bottom-24 right-6 max-sm:hidden
         max-sm:text-black  font-bold '
        >
          Beats Solo Air{" "}
        </p>
        <button
          className='text-red-600 w-[150px] absolute bottom-2 right-5 z-20
        max-lg:w-[92px] max-lg:text-lg  py-2 text-2xl
         bg-white font-bold rounded-xl'
        >
          Shop Now
        </button>
      </div>

      <img
        className='absolute z-10 top-[0%] max-md:left-[0%] left-[30%]'
        src={banner}
        width={"500px"}
        height={"500px"}
      />
    </section>
  );
};

export default Footer;
