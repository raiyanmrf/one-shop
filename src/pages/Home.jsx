import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import FooterBanner from "../components/FooterBanner";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className='relative top-[80px] mx-auto p-1'
    >
      <Hero />
      <Products />
      <FooterBanner />
      <div className=' mt-14 text-center text-stone-500'>
        <p>All rights reserved to boats</p>
      </div>
    </motion.main>
  );
};

export default Home;
