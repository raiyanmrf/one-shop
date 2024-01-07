import React, { useContext } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";

const Shop = () => {
  const { cartItems, addTocart } = useContext(Shopcontext);

  return (
    <main className='bg-gradient-to-r from-black to-neutral-lime '>
      <section
        id='products'
        className='relative  mt-[70px] flex flex-wrap gap-7 p-3 bg-transparent items-center 
      justify-center'
      >
        {PRODUCTS &&
          PRODUCTS.map(product => (
            <div
              key={product.id}
              className='flex flex-col bg-neutral-100 p-2 shadow-xl gap-3  
               items-center w-[300px] max-sm:w-[200px] justify-center mt-[50px] rounded-lg'
            >
              <img width={"200px"} src={product.productImage} alt='?' />

              <h3 className='text-[18px] max-sm:text-sm font-semibold'>
                {product.productName}
              </h3>
              <p className='max-sm:text-sm'>{product.price}$</p>
              <button
                onClick={() => addTocart(product.id)}
                className='px-3 py-1 font-semibold text-center 
                rounded-[300px] border-2 border-slate-800 bg-white text-black
                max-sm:text-sm
       hover:bg-black hover:text-white'
              >
                Add to cart{" "}
                {cartItems[product.id] > 0 && (
                  <span>({cartItems[product.id]})</span>
                )}
              </button>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Shop;
