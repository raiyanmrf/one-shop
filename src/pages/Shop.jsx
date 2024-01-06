import React, { useContext } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";

const Shop = () => {
  const { cartItems, addTocart } = useContext(Shopcontext);
  return (
    <main className=''>
      <section className='flex flex-wrap gap-7 p-3 bg-neutral-200 items-center justify-center'>
        {PRODUCTS &&
          PRODUCTS.map(product => (
            <div
              key={product.id}
              className='flex flex-col bg-neutral-100 shadow-xl gap-3  w-[300px] h-[400px] items-center justify-center'
            >
              <img width={"200px"} src={product.productImage} alt='?' />
              <h3 className='text-[18px] font-semibold'>
                {product.productName}
              </h3>
              <p>{product.price}$</p>
              <button
                onClick={() => addTocart(product.id)}
                className='px-3 py-1 font-semibold text-center rounded-[300px] border-2 bg-white text-black hover:bg-black hover:text-white'
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
