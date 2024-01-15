import React from "react";
import ProductDetail from "../components/ProductDetail";
import { motion } from "framer-motion";
import Products from "../components/Products";
import FooterBanner from "../components/FooterBanner";

const Shop = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className='relative top-[80px] px-3 container'
    >
      <section
        className='flex relative 
      top-0  justify-center h-screen  items-center gap-2 lg:gap-28 max-lg:gap-3 '
      >
        <ProductDetail />
      </section>
      <section className='relative w-screen ] '>
        <Products />
      </section>
      <FooterBanner />
    </motion.main>
  );
};

export default Shop;
