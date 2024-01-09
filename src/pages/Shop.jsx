import React, { useContext, useState } from "react";
import { PRODUCTS, banner } from "../assets/Product";
import { Shopcontext } from "../hooks/shop-context";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineInbox,
  AiOutlineInfo,
} from "react-icons/ai";

const Shop = () => {
  const { cartItems, addTocart } = useContext(Shopcontext);
  const [bigImage, setbigImage] = useState(banner);
  return (
    <main className='relative top-[80px] mx-auto p-1 '>
      <section className='flex justify-between'>
        <div>
          <div>
            <img src={bigImage} alt='bigImage' />
          </div>
          <div className='flex  rounded-lg hover:animate-pulse '>
            <img src={banner} width={"100px"} alt='smallImages' />
            <img src={banner} width={"100px"} alt='smallImages' />
            <img src={banner} width={"100px"} alt='smallImages' />
            <img src={banner} width={"100px"} alt='smallImages' />
          </div>
        </div>

        <article>
          <h2>NAme</h2>
          <div className='flex'>
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiOutlineStar style={{ color: "red" }} />{" "}
          </div>
          <h3>Detail</h3>
          <p>Desc</p>
          <h3>Price</h3>
          <h3 className='flex justify-center items-center'>
            quantity:
            <span className='border flex justify-center items-center'>
              <AiOutlinePlus />
              <input className='w-10 border' type='text' />
              <AiOutlineMinus />
            </span>
          </h3>
        </article>
      </section>
      <section className='mt-[120px]'>
        <div className='relative h-[400px] w-full  overflow-x-hidden'>
          <div className='flex justify-center gap-[15px] mt-[20px] absolute whitespace-nowrap track '>
            {PRODUCTS &&
              PRODUCTS.map(product => (
                <div key={product.id} className='flex-col'>
                  <div className='mb-2 w-[200px] rounded-lg bg-stone-300 hover:animate-pulse'>
                    <img src={product.productImage} alt='Product' />
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold'>
                      {product.productName}
                    </h3>
                    <p className='text-sm'>{product.price}$</p>
                    <button onClick={() => addTocart(product.id)}>
                      Add to cart{" "}
                      {cartItems[product.id] > 0 && (
                        <span>({cartItems[product.id]})</span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
