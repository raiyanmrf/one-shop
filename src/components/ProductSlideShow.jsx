import React, { useContext } from "react";
import { PRODUCTS } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";

const ProductSlideShow = () => {
  const {
    setSmallimages,

    setbigImage,
  } = useContext(Shopcontext);
  return (
    <>
      {" "}
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
    </>
  );
};

export default ProductSlideShow;
