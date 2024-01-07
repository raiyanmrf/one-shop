import React from "react";
import { banner } from "../assets/Product";
const Footer = () => {
  return (
    <section className='p-2 relative flex gap-3  text-white justify-between  bg-red-600 h-[400px] w-full'>
      <div className='flex flex-col'>
        <h3 className='text-xl px-3 '>20% off </h3>
        <h1 className='text-[160px] relative sm:bottom-10 max-sm:text-[110px] font-bold text-white'>
          FINE
        </h1>
        <h1 className='text-[160px]  relative max-sm:bottom-[50px] sm:bottom-[120px] max-sm:text-[100px] font-bold text-white'>
          SMILE
        </h1>
        <h3 className='text-xl px-3 relative sm:bottom-[150px]'>
          15 Nov to 17 Dec
        </h3>
      </div>

      <div className='flex flex-col gap-10'>
        <p className='text-2xl relative font-bold '>Beats Solo Air </p>
        <h2 className='text-6xl max-sm:text-4xl max-sm:right-[50px] z-20 max-sm:whitespace-nowrap relative font-bold '>
          Summer Sale
        </h2>
        <button
          className=' right-1  bg-white w-[150px] 
      max-sm:w-[130px] max-sm:text-xl  py-2 text-2xl text-red-600 font-bold
       rounded-xl relative z-20'
        >
          Shop Now
        </button>
      </div>

      <img
        className='absolute z-10 top-[0%] max-sm:left-[20%] left-[40%]'
        src={banner}
        width={"500px"}
        height={"500px"}
      />
    </section>
  );
};

export default Footer;
