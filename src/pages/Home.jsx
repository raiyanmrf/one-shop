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
      <div className=' mt-14 text-center text-stone-500'>
        <p>All rights reserved to boats</p>
      </div>
    </main>
  );
};

export default Home;
