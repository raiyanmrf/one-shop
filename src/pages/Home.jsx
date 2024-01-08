import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className='relative top-[80px] mx-auto p-1'>
      <Hero />
      <Products />
      <Footer />
    </main>
  );
};

export default Home;
