import React, { useContext, useState } from "react";
import { PRODUCTS, hpa3 } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

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
  return (
    <>
      <article className='absolute top-0   '>
        {" "}
        <div>
          <div>
            <img width={"500px"} src={bigImage} alt='bigImage' />
          </div>
          <div className='flex relative top-5 gap-2  justify-center items-center'>
            {PRODUCTS &&
              PRODUCTS.filter(p => p.tag === smallImages).map(p => {
                return (
                  <div key={p.id} className='flex z-20 rounded-lg bg-stone-300'>
                    <img
                      onClick={() => setbigImage(p.productImage)}
                      className={`hover:bg-red-600 hover:rounded-lg`}
                      width={"100px"}
                      src={p.productImage}
                    />
                  </div>
                );
              })}
          </div>{" "}
        </div>
      </article>

      <article className='w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] relative z-10 h-screen  flex justify-center items-center container'>
        {PRODUCTS &&
          PRODUCTS.filter(p => p.productImage === bigImage).map(p => {
            return (
              <div key={p.id} className=' w-full h-[80vh] p-1 '>
                <h2
                  className='font-bold md:text-4xl md:font-extrabold
                 text-white bg-black bg-opacity-70 inline-block text-2xl mb-2'
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
                    <p className='max-sm:text-[11px] absolute bg-stone-100 sm:p-5 font-semibold text-sm '>
                      {p.productDesc.slice(0, 400)}.
                    </p>
                  )}
                </div>
                <div className='flex w-full justify-end'>
                  <AiFillStar style={{ color: "red" }} />
                  <AiFillStar style={{ color: "red" }} />
                  <AiFillStar style={{ color: "red" }} />
                  <AiOutlineStar style={{ color: "red" }} />
                </div>
                <div className='flex w-full justify-end'>
                  <h3 className='text-red-600 text-xl sm:text-4xl lg:text-8xl font-extrabold mt-5'>
                    ${p.price}
                  </h3>
                </div>
                <h3 className='flex justify-start max-md:text-sm text-lg gap-1 mt-3 font-semibold items-start'>
                  <span className=' bg-black  bg-opacity-70 md:bg-transparent md:text-black text-white'>
                    Quantity:
                  </span>
                  <span
                    className='border bg-black bg-opacity-70 border-none md:bg-transparent md:text-black text-white
                    font-mono flex justify-center items-center'
                  >
                    <AiOutlinePlus onClick={() => addTocart(p.id)} />
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
                      addTocart(p.id);
                    }}
                    className='text-white text-sm md:text-lg font-extrabold whitespace-nowrap   border-black bg-red-600  px-1'
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
