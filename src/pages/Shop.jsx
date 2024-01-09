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
  const { cartItems, addTocart, removeFromcart, updateCartItem } =
    useContext(Shopcontext);
  const [bigImage, setbigImage] = useState(banner);
  const [smallImages, setSmallimages] = useState("hpbanner");

  return (
    <main className='relative top-[80px] mx-auto p-1 '>
      <section className='flex relative top-0 justify-center items-center gap-2 sm:gap-40'>
        <div className=' '>
          <div>
            <img width={"500px"} src={bigImage} alt='bigImage' />
          </div>
          <div className='flex gap-2 max-sm:absolute bottom-[-130px] justify-center items-center'>
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

        <article className='sm:w-[50%]'>
          {PRODUCTS &&
            PRODUCTS.filter(p => p.productImage === bigImage).map(p => {
              return (
                <div key={p.id}>
                  <h2>{p.productName}</h2>
                  <div className='flex'>
                    <AiFillStar style={{ color: "red" }} />
                    <AiFillStar style={{ color: "red" }} />
                    <AiFillStar style={{ color: "red" }} />
                    <AiOutlineStar style={{ color: "red" }} />{" "}
                  </div>
                  <h3>Detail</h3>
                  <p className='max-sm:text-[13px] sm:break-words max-w-sm'>
                    {p.productDesc.slice(0, 190)}.
                  </p>
                  <h3>{p.price}$</h3>
                  <h3 className='flex justify-start gap-1 items-start'>
                    Quantity:
                    <span className='border flex justify-center items-center'>
                      <AiOutlinePlus onClick={() => addTocart(p.id)} />
                      <input
                        className='w-5 text-center border'
                        type='text'
                        value={cartItems[p.id]}
                        onChange={e => {
                          updateCartItem(Number(e.target.value), p.id);
                        }}
                      />
                      <AiOutlineMinus onClick={() => removeFromcart(p.id)} />
                    </span>
                  </h3>
                </div>
              );
            })}
        </article>
      </section>
      <section className='mt-[190px]'>
        <h1 className='text-4xl'>You May Also Like</h1>
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
                    <button
                      onClick={() => {
                        setbigImage(product.productImage);
                        addTocart(product.id);
                        setSmallimages(product.tag);
                      }}
                    >
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
