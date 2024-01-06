import React from "react";
import { hero, hero2, herotab1, herotab2, herotab3 } from "../assets/Product";

const Hero = () => {
  return (
    <main className=' w-full min-h-screen  bg-neutral-200 object-contain'>
      <section className='flex  relative bg-red-300 justify-center items-center'>
        <img className='' src={hero2} width={"840px"} height={"526px"} />
        <button className='absolute font-serif text-transparent text-4xl left-[30%] bottom-[16%] lef transform rotate-3 z-10 border-4 border-black'>
          S H O P v
        </button>
      </section>
    </main>
  );
};

export default Hero;
