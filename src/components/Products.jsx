import React from "react";
import { PRODUCTS } from "../assets/Product";
import { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { cartItems, setbigImage, setSmallimages } = useContext(Shopcontext);
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
              <div
                onClick={() => {
                  setbigImage(product.productImage);
                  setSmallimages(product.tag);
                  navigate("/shop");
                }}
                className='productsImg'
              >
                <img width={"200px"} src={product.productImage} alt='?' />
              </div>

              <h3 className='text-[18px] mt-2 max-sm:text-[12px] font-semibold'>
                {product.productName}
              </h3>
              <p className='max-sm:text-sm text-red-500 font-mono font-bold '>
                {product.price}$
              </p>
              <div className='w-full  flex flex-col items-end relative bottom-9 px-1'>
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
                {cartItems[product.id] > 0 && (
                  <p className='productsCounter'>{cartItems[product.id]}</p>
                )}
              </div>
            </div>
          ))}
      </article>
    </section>
  );
};

export default Products;
