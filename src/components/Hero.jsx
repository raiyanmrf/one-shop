import React from "react";
import { banner } from "../assets/Product";
const Hero = () => {
  return (
    <section className='px-2 relative top-0 flex flex-col  justify-center  bg-stone-300 h-[500px] w-full'>
      <p className='text-2xl relative left-1 sm:top-9'>Beats Solo </p>
      <h2 className='text-6xl max-sm:text-4xl relative font-bold max-sm:top-0 top-10'>
        Wireless
      </h2>
      <h1 className='text-[160px] relative right-1 max-sm:text-[70px] font-bold text-white'>
        HEADPHONES
      </h1>
      <button className='bg-red-600 w-[150px] max-sm:w-[130px] max-sm:text-xl  py-2 text-2xl text-white font-bold rounded-xl'>
        Shop Now
      </button>
      <div className='max-sm:absolute flex flex-col sm:items-end max-sm:bottom-9 '>
        <h3 className='text-xl font-bold text-sky-950'>Description</h3>
        <p className='text-lg font-light'>Best Headphone on the market</p>
      </div>
      <img
        className='absolute top-[0%] max-sm:left-[20%] left-[40%]'
        src={banner}
        width={"500px"}
        height={"500px"}
      />
    </section>
  );
};

export default Hero;
