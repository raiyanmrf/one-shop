import React, { useContext } from "react";
import { Shopcontext } from "../hooks/shop-context";
import { TiDeleteOutline } from "react-icons/ti";

const CartItems = ({ product }) => {
  const {
    cartItems,
    addTocart,
    removeFromcart,
    updateCartItem,
    delelteCartItem,
  } = useContext(Shopcontext);

  return (
    <>
      {" "}
      <div
        key={product.id}
        className='flex flex-1   w-full  items-center justify-evenly'
      >
        <div className='w-[100px]'>
          {" "}
          <img width={"90px"} src={product.productImage} alt='?' />
        </div>
        <div className='max-md:text-[8px] text-[13px]'>
          {" "}
          <h3 className=' font-semibold'>{product.productName}</h3>
          <p className=' font-semibold'>{product.price}$</p>
        </div>

        <div className='flex max-md:text-sm text-lg h-[30px] '>
          {" "}
          <button
            onClick={() => addTocart(product.id)}
            className='px-1  border-r-2 font-mono font-bold bg-white hover:text-black text-green-600'
          >
            +
          </button>
          <input
            type='text'
            className=' w-[20px]  relative z-20 text-center  border-r-2  bg-white text-black'
            value={cartItems[product.id]}
            placeholder=''
          />
          <button
            onClick={() => removeFromcart(product.id)}
            className='px-1 font-bold font-mono bg-white
             hover:text-black text-red-600 '
          >
            -
          </button>
        </div>
        <div className='text-red-600'>
          <TiDeleteOutline
            onClick={() => {
              delelteCartItem(product.id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CartItems;
