import React from "react";
import { banner } from "../assets/Product";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
  const nav = useNavigate();
  return (
    <section className='px-2 relative top-0 flex flex-col  justify-center  bg-stone-300 h-[500px] w-full'>
      <p className='text-2xl relative left-1 sm:top-9'>Beats Solo </p>
      <h2 className='text-6xl max-sm:text-4xl relative font-bold max-sm:top-0 top-10'>
        Wireless
      </h2>
      <motion.h1
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-[160px] relative right-1 max-lg:text-[90px] max-sm:text-[50px] font-bold text-white'
      >
        <span className='relative max-sm:z-20'>HEAD</span>PHONES
      </motion.h1>
      <button
        onClick={() => {
          nav("/shop");
        }}
        className='bg-red-600 w-[150px] max-sm:w-[130px] max-sm:text-xl  py-2 text-2xl text-white font-bold relative z-50 rounded-xl'
      >
        Shop Now
      </button>
      <div className='absolute flex flex-col sm:right-0 bottom-6 '>
        <h3 className='text-xl font-bold text-sky-950'>bOats 1000D</h3>
        <p className='text-lg font-light'>Best Headphone on the market</p>
      </div>
      <img
        className='absolute top-[0%] max-sm:left-[12%] left-[40%]'
        src={banner}
        width={"500px"}
        height={"500px"}
      />
    </section>
  );
};

export default Hero;
