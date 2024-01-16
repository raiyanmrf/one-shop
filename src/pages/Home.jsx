import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import FooterBanner from "../components/FooterBanner";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
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
      <Footer />
    </motion.main>
  );
};

export default Home;
