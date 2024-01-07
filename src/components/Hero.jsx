import React from "react";
import { banner } from "../assets/Product";
const Hero = () => {
  return (
    <section className='p-2 relative top-0 flex flex-col  justify-center  bg-stone-300 h-[500px] w-full'>
      <p className='text-2xl relative top-9'>Beats Solo Air </p>
      <h2 className='text-6xl max-sm:text-4xl relative font-bold top-10'>
        Summer Sale
      </h2>
      <h1 className='text-[160px] max-sm:text-[130px] font-bold text-white'>
        FINE
      </h1>
      <button className='bg-red-600 w-[150px] max-sm:w-[130px] max-sm:text-xl  py-2 text-2xl text-white font-bold rounded-xl'>
        Shop Now
      </button>
      <div className='flex flex-col items-end  '>
        <h3 className='text-xl font-bold text-sky-950'>Descriptiopn</h3>
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
