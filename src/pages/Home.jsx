import React from "react";

import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <main className='relative top-[80px]'>
      <Hero />
      <Products />
    </main>
  );
};

export default Home;
