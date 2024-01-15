import React from "react";
import ProductDetail from "../components/ProductDetail";

import Products from "../components/Products";

const Shop = () => {
  return (
    <main className='relative top-[80px] px-3 container'>
      <section
        className='flex relative 
      top-0  justify-center h-screen  items-center gap-2 lg:gap-28 max-lg:gap-3 '
      >
        <ProductDetail />
      </section>
      <section className='relative w-screen ] '>
        <Products />
      </section>
    </main>
  );
};

export default Shop;
