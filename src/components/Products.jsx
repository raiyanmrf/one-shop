import React from "react";
import { PRODUCTS } from "../assets/Product";
import { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Products = () => {
  const { cartItems, addTocart, setbigImage, setSmallimages } =
    useContext(Shopcontext);
  const navigate = useNavigate();
  return (
    <section className='p-2 mt-10'>
      <h2 className='text-6xl max-sm:text-3xl text-center font-bold text-cyan-950'>
        Best Seller Products
      </h2>

      <article className='flex flex-wrap gap-5 items-center justify-center mt-9'>
        {PRODUCTS &&
          PRODUCTS.map(product => (
            <div key={product.id} className=' '>
              <a href='#d'>
                <div
                  onClick={() => {
                    setbigImage(product.productImage);
                    setSmallimages(product.tag);
                    navigate("/shop");
                  }}
                  className='bg-stone-200 p-2 shadow-lg flex justify-center
         items-center w-[300px] max-sm:w-[150px] object-contain rounded-lg top-0 relative  hover:bg-red-600'
                >
                  <img width={"200px"} src={product.productImage} alt='?' />
                </div>
              </a>

              <h3 className='text-[18px] mt-2 max-sm:text-[12px] font-semibold'>
                {product.productName}
              </h3>
              <p className='max-sm:text-sm text-red-500 font-mono font-bold '>
                {product.price}$
              </p>
              <div className='w-full  flex flex-col items-end relative bottom-9 px-1'>
                <a href='#d'>
                  {" "}
                  <button
                    onClick={() => {
                      setbigImage(product.productImage);
                      setSmallimages(product.tag);
                      navigate("/shop");
                    }}
                    className='relative  bg-stone-200 px-1 rounded-full max-sm:top-7
                   right-[0px] text-xl'
                  >
                    <ShoppingCart />
                  </button>
                </a>

                {cartItems[product.id] > 0 && (
                  <p
                    className='absolute rounded-[100%] 
                  w-[15px] text-center bg-red-600 text-white font-mono
                  text-[11px] bottom-3 right-[-5px]'
                  >
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
