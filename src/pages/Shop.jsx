import React, { useContext, useState } from "react";
import { PRODUCTS, hpa3 } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Shop = () => {
  const {
    cartItems,
    addTocart,
    removeFromcart,
    updateCartItem,
    smallImages,
    setSmallimages,
    bigImage,
    setbigImage,
  } = useContext(Shopcontext);

  return (
    <main className='relative top-[80px]  container'>
      <section
        className='flex relative 
      top-0  md:max-lg:justify-between  items-center gap-2  lg:gap-28 max-lg:gap-3'
      >
        <div>
          <div>
            <img width={"500px"} src={bigImage} alt='bigImage' />
          </div>
          <div className='flex gap-2 max-sm:absolute bottom-[10px] max-sm:w-[250px] justify-center items-center'>
            {PRODUCTS &&
              PRODUCTS.filter(p => p.tag === smallImages).map(p => {
                return (
                  <div key={p.id} className='flex rounded-lg bg-stone-300'>
                    <img
                      onMouseOver={() => setbigImage(p.productImage)}
                      className={`hover:bg-red-600`}
                      width={"100px"}
                      src={p.productImage}
                    />
                  </div>
                );
              })}
          </div>{" "}
        </div>

        <article className='w-[60%]'>
          {PRODUCTS &&
            PRODUCTS.filter(p => p.productImage === bigImage).map(p => {
              return (
                <div key={p.id}>
                  <h2 className='font-bold text-sky-950 text-2xl mb-2'>
                    {p.productName}
                  </h2>
                  <div className='flex'>
                    <AiFillStar style={{ color: "red" }} />
                    <AiFillStar style={{ color: "red" }} />
                    <AiFillStar style={{ color: "red" }} />
                    <AiOutlineStar style={{ color: "red" }} />
                  </div>
                  <h3 className='mt-5 font-semibold'>Detail:</h3>
                  <p className='max-sm:text-[11px] text-sm '>
                    {p.productDesc.slice(0, 400)}.
                  </p>
                  <h3 className='text-red-600 font-semibold mt-5'>
                    ${p.price}
                  </h3>
                  <h3 className='flex justify-start gap-1 mt-3 font-semibold items-start'>
                    Quantity:
                    <span className='border font-mono flex justify-center items-center'>
                      <AiOutlinePlus onClick={() => addTocart(p.id)} />
                      <input
                        className='w-5 text-center border '
                        type='text'
                        value={cartItems[p.id]}
                        onChange={e => {
                          updateCartItem(Number(e.target.value), p.id);
                        }}
                      />
                      <AiOutlineMinus onClick={() => removeFromcart(p.id)} />
                    </span>
                  </h3>
                  <div className='flex gap-3 mt-10'>
                    <button
                      onClick={() => {
                        addTocart(p.id);
                      }}
                      className='text-red-600 whitespace-nowrap p-2 border border-red-600 bg-white font-semibold px-1'
                    >
                      Add to Cart
                    </button>
                    <button className='bg-red-600 p-2 whitespace-nowrap text-white font-semibold px-1'>
                      Shop Now
                    </button>
                  </div>
                </div>
              );
            })}
        </article>
      </section>
      <section className='mt-[190px]'>
        <h1 className='text-3xl font-bold text-sky-950 text-center mb-5'>
          You may also Like these products..
        </h1>
        <div className='relative h-[400px] w-full  overflow-x-hidden'>
          <div className='flex justify-center gap-[15px] mt-[20px] absolute whitespace-nowrap track '>
            {PRODUCTS &&
              PRODUCTS.map(product => (
                <div key={product.id} className='flex-col'>
                  <div
                    onClick={() => {
                      setbigImage(product.productImage);
                      setSmallimages(product.tag);
                    }}
                    className='mb-2 w-[200px] rounded-lg bg-stone-300 hover:animate-pulse'
                  >
                    <img src={product.productImage} alt='Product' />
                  </div>
                  <div>
                    <h3 className='text-[18px] font-semibold'>
                      {product.productName}
                    </h3>
                    <p className='text-sm font-bold text-red-600'>
                      {product.price}$
                    </p>
                    <button
                      className='bg-black whitespace-nowrap text-white  px-1'
                      onClick={() => {
                        setbigImage(product.productImage);
                        setSmallimages(product.tag);
                      }}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='relative bottom-1 text-center text-stone-500'>
          <p>All rights reserved to boats</p>
        </div>
      </section>
    </main>
  );
};

export default Shop;
