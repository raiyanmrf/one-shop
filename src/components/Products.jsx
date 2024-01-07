import React from "react";
import { PRODUCTS } from "../assets/Product";
import { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";
import { ShoppingCart } from "phosphor-react";

const Products = () => {
  const { cartItems, addTocart } = useContext(Shopcontext);
  return (
    <section className='p-2 mt-10'>
      <h2 className='text-6xl text-center font-bold text-cyan-950'>
        Best Seller Products
      </h2>
      <p className='text-lg text-center font-light'>
        Best Headphone on the market
      </p>

      <article className='flex flex-wrap gap-5 items-center justify-center mt-9'>
        {PRODUCTS &&
          PRODUCTS.map(product => (
            <div key={product.id} className=' '>
              <div
                className='bg-stone-300 p-2 shadow-xl  flex justify-center
         items-center w-[300px] max-sm:w-[200px] rounded-lg top-0 relative'
              >
                <img width={"200px"} src={product.productImage} alt='?' />
              </div>

              <h3 className='text-[18px] max-sm:text-sm font-semibold'>
                {product.productName}
              </h3>
              <p className='max-sm:text-sm '>{product.price}$</p>
              <div className='w-full   flex flex-col items-end relative bottom-9 px-1'>
                <button
                  onClick={() => addTocart(product.id)}
                  className='relative  bg-stone-200 px-1 rounded-full right-0 text-xl'
                >
                  <ShoppingCart />
                </button>

                {cartItems[product.id] > 0 && (
                  <p className='absolute rounded-[100%] w-[15px] text-center bg-red-600 text-white text-[11px] bottom-3 right-[-5px]'>
                    {cartItems[product.id]}
                  </p>
                )}
              </div>
            </div>
          ))}
      </article>
    </section>
  );
};

export default Products;
