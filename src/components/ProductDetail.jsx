import React, { useContext, useState } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import { useEffect } from "react";

const ProductDetail = () => {
  const [showDetails, setshowDetails] = useState(false);
  const {
    cartItems,
    addTocart,
    removeFromcart,
    updateCartItem,
    smallImages,
    bigImage,
    setbigImage,
  } = useContext(Shopcontext);
  const scrollUp = useRef(null);

  useEffect(() => {
    scrollUp.current.scrollIntoView({ behavior: "auto" });
  }, [bigImage]);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <article className='absolute top-0   '>
        {" "}
        <div ref={scrollUp}>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img width={"500px"} src={bigImage} alt='bigImage' />
          </motion.div>
          <div className='flex sm:absolute  left-[-120px] bottom-[10%]  gap-2  justify-center items-center'>
            {PRODUCTS &&
              PRODUCTS.filter(p => p.tag === smallImages).map(p => {
                return (
                  <div key={p.id} className='flex z-20 rounded-lg bg-stone-300'>
                    <img
                      onClick={() => setbigImage(p.productImage)}
                      className={`hover:bg-red-600 hover:rounded-lg`}
                      width={"50px"}
                      src={p.productImage}
                    />
                  </div>
                );
              })}
          </div>{" "}
        </div>
      </article>

      <article
        className='w-[100%] h-[100vh] sm:w-[80%] md:w-[70%] lg:w-[60%] relative 
      z-10 flex justify-center items-center container'
      >
        {PRODUCTS &&
          PRODUCTS.filter(p => p.productImage === bigImage).map(p => {
            return (
              <div key={p.id} className=' w-full h-[80vh] p-1 '>
                <h2
                  className='font-bold max-lg:text-sm text-xl md:font-extrabold px-1 max-lg:text-white max-lg:bg-black
                  max-lg:-z-0 bg-opacity-70 inline-block  mb-2'
                >
                  {p.productName}
                </h2>

                <div className='w-full'>
                  {" "}
                  <button
                    onClick={() => {
                      setshowDetails(!showDetails);
                    }}
                    className='mt-5 text-white bg-black bg-opacity-70 text-sm
                    px-2 inline-block font-semibold'
                  >
                    {showDetails ? "hide details" : "show details"}
                  </button>
                  {showDetails && (
                    <p
                      className='max-sm:text-[11px]  absolute bg-stone-100 bg-opacity-90 sm:p-5 
                    font-semibold text-sm max-w-lg '
                    >
                      {p.productDesc.slice(0, 400)}.
                    </p>
                  )}
                </div>
                <div className='flex w-full text-red-600 justify-end'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className='flex w-full justify-end'>
                  <h3 className='text-red-600 text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold mt-5'>
                    ${p.price}
                  </h3>
                </div>
                <h3 className='flex justify-start max-md:text-sm text-lg gap-1 mt-3 font-semibold items-start'>
                  <span className=' bg-black  bg-opacity-70 xl:bg-transparent xl:text-black text-white'>
                    Quantity:
                  </span>
                  <span
                    className='border bg-black bg-opacity-70 border-none xl:bg-transparent xl:text-black text-white
                    font-mono flex justify-center items-center'
                  >
                    <AiOutlinePlus
                      onClick={() => {
                        toast.success(`${p.productName} added to cart`);
                        addTocart(p.id);
                      }}
                    />
                    <input
                      className='w-5 text-center  text-black '
                      type='text'
                      value={cartItems[p.id]}
                      onChange={e => {
                        updateCartItem(Number(e.target.value), p.id);
                      }}
                    />
                    <AiOutlineMinus onClick={() => removeFromcart(p.id)} />
                  </span>
                </h3>
                <div className='flex items-center justify-end gap-3 mt-10'>
                  <button
                    onClick={() => {
                      toast.success(`${p.productName} added to cart`);
                      addTocart(p.id);
                    }}
                    className='text-white text-sm md:text-lg font-extrabold whitespace-nowrap 
                      border-black bg-red-600  px-1'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </article>
    </>
  );
};

export default ProductDetail;
